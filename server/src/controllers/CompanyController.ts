import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Company } from "../entity/Company";

class CompanyController{

  static listAll = async (req: Request, res: Response) => {
    //Get users from database
    const companyRepository = getRepository(Company);
    const companies = await companyRepository.find({
      select: ["id", "name", "logo"],
      relations: ["users"]
    });

    //Send the users object
    res.send(companies);
  };

  static getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id: string = req.params.id;

    //Get the user from database
    const companyRepository = getRepository(Company);
    try {
      const company = await companyRepository.findOneOrFail(id, {
        select: ["id", "name", "logo"], //We dont want to send the password on response
        relations: ["users"]
      });
      res.send(company);
    } catch (error) {
        res.status(404).send("Company not found");
    }
  };

  static newCompany = async (req: Request, res: Response) => {
    //Get parameters from the body
    let { name, logo } = req.body;
    let company = new Company();
    company.name = name;
    company.logo = logo;

    //Validade if the parameters are ok
    const errors = await validate(company);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
   }

    //Try to save. If fails, the username is already in use
    const companyRepository = getRepository(Company);
    try {
        await companyRepository.save(company);
    } catch (e) {
        res.status(409).send("company name already in use");
        return;
    }

    //If all ok, send 201 response
    res.status(201).send("Company created");
  };

  static editCompany = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id: string = req.params.id;

    //Get values from the body
    const { name, logo } = req.body;

    //Try to find user on database
    const companyRepository = getRepository(Company);
    let company;
    try {
        company = await companyRepository.findOneOrFail(id);
    } catch (error) {
        //If not found, send a 404 response
        res.status(404).send("Company not found");
        return;
    }

    //Validate the new values on model
    company.name = name;
    company.logo = logo;
    const errors = await validate(company);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }

    //Try to safe, if fails, that means username already in use
    try {
        await companyRepository.save(company);
    } catch (e) {
        res.status(409).send("Company already in use");
        return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  static deleteCompany = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    const companyRepository = getRepository(Company);
    let company: Company;
    try {
        company = await companyRepository.findOneOrFail(id);
    } catch (error) {
        res.status(404).send("company not found");
        return;
    }
    companyRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

};

export default CompanyController;
