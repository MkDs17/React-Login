import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../entity/User";

class UserController{

  static listAll = async (req: Request, res: Response) => {
    //Get users from database
    const userRepository = getRepository(User);
    const users = await userRepository.find({
      select: ["id", "name", "role", "designation"],
      relations: ["company"]
    });

    //Send the users object
    res.send(users);
  };

  static getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id: string = req.params.id;

    //Get the user from database
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOneOrFail(id, {
        select: ["id", "name", "role", "designation"], //We dont want to send the password on response
        relations: ["company"]
      });
      res.send(user);
    } catch (error) {
        res.status(404).send("User not found");
    }
  };

  static newUser = async (req: Request, res: Response) => {
    //Get parameters from the body
    let { username, password, name, designation, companyId, role } = req.body;

    let user = new User();
    user.username = username;
    user.password = password;
    user.name = name;
    user.designation = designation;
    user.company = companyId;
    user.role = role;

    //Validate if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
   }

    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
        await userRepository.save(user);
    } catch (e) {
        res.status(409).send("username already in use");
        return;
    }

    //If all ok, send 201 response
    res.status(201).send("User created");
  };

  static editUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;
    
    //Get values from the body
    const { name, designation, role } = req.body;

    //Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
        user = await userRepository.findOneOrFail(id, {
          select: ["id", "name", "role", "designation"],
          relations: ["company"]
        });
    } catch (error) {
        //If not found, send a 404 response
        res.status(404).send("User not found");
        return;
    }

    //Validate the new values on model
    user.name = name;
    user.designation = designation;
    user.role = role;

    //Try to safe, if fails, that means username already in use
    try {
        await userRepository.save(user);
    } catch (e) {
        res.status(409).send("username already in use");
        return;
    }
    //After all send a 200 response with user infos
    res.status(200).send("informations updated");
  };

  static deleteUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    const userRepository = getRepository(User);
    let user: User;
    try {
        user = await userRepository.findOneOrFail(id);
    } catch (error) {
        res.status(404).send("User not found");
        return;
    }
    userRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

};

export default UserController;
