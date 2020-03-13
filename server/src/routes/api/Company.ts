import express = require('express')
import { getRepository } from "typeorm"
import { Company } from '../../entity/Company'
import { JsonHandler } from '../../services/JsonHandler'
const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const companies: Company[] = await getRepository(Company).find({ relations: ["employees"]})
  res.send(companies)
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const companyId: string = req.params.id
  const company: Company = await getRepository(Company).findOne({
    where: {
        id: companyId
    },
    relations: ["employees"]
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

module.exports = router;
