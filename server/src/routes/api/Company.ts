import { Router } from "express";
import CompanyController from "../../controllers/CompanyController";

import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";

const router = Router();

//Get all companies
router.get("/", CompanyController.listAll);

// Get one company
router.get(
  "/:id([0-9]+)",
  CompanyController.getOneById
);

//Create a new company
router.post("/", [checkJwt, checkRole(["ADMIN"])], CompanyController.newCompany);

//Edit one company
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  CompanyController.editCompany
);

//Delete one company
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  CompanyController.deleteCompany
);

export default router;


/* router.get('/', async (req: express.Request, res: express.Response) => {
  const companies: Company[] = await getRepository(Company).find({ relations: ["users"]})
  res.send(companies)
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const companyId: string = req.params.id
  const company: Company = await getRepository(Company).findOne({
    where: {
        id: companyId
    },
    relations: ["users"]
    })

  res.send(company)
})

router.post('/', async (req: express.Request, res: express.Response) => {
  const company: Company = new Company()
  const data: any = req.body

  if (!data.name) {
      res.status(400)
      const response: JsonHandler = JsonHandler.JsonResponse(false, "Champ 'nom' requis",res.statusCode)
      res.send(response)
  }

  company.name = data.name
  company.logo = data.logo
  await getRepository(Company).save(company)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Société créé')
  res.send(response)
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
  const companyId: string = req.params.id
  const company: Company = await getRepository(Company).findOne(companyId)
  const data: any = JsonHandler.clearInput(req.body)

  company.name = data.name
  company.logo = data.logo
  await getRepository(Company).save(company)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Société edité')
  res.send(response)
})

router.delete('/:id', async (req: express.Request, res: express.Response) => {
  const companyId: string = req.params.id
  const company: Company = await getRepository(Company).findOne(companyId)

  await getRepository(Company).remove(company)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Société supprimé')
  res.send(response)
})

module.exports = router; */
