import { Router } from "express";
import UserController from "../../controllers/UserController";

import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", UserController.listAll);

// Get one user
router.get(
  "/:id([0-9]+)",
  UserController.getOneById
);

//Create a new user
router.post("/", 
  [checkJwt, checkRole(["ADMIN"])],
  UserController.newUser
);

//Edit one user
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editUser
);

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deleteUser
);

export default router;

/* router.get('/', async (req: express.Request, res: express.Response) => {
  const users: User[] = await getRepository(User).find({ relations: ["company"] })
  res.send(users)
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const userId: string = req.params.id
  const user: User = await getRepository(User).findOne({
    where: {
        id: userId
    },
    relations: ["company"]
  })

  res.send(user)
})

router.post('/', async (req: express.Request, res: express.Response) => {
  const user: User = new User()
  const data: any = req.body

  if (!data.name) {
      res.status(400)
      const response: JsonHandler = JsonHandler.JsonResponse(false, "Champ 'nom' requis",res.statusCode)
      res.send(response)
  }

  user.username = data.name   
  user.company = data.company
  await getRepository(User).save(user)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'User créé')
  res.send(response)
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
  const userId: string = req.params.id
  const user: User = await getRepository(User).findOne(userId)
  const data: any = JsonHandler.clearInput(req.body)

  user.username = data.name    
  await getRepository(User).save(user)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'User edité')
  res.send(response)
})

router.delete('/:id', async (req: express.Request, res: express.Response) => {
  const userId: string = req.params.id
  const user: User = await getRepository(User).findOne(userId)

  await getRepository(User).remove(user)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'User supprimé')
  res.send(response)
}) */
