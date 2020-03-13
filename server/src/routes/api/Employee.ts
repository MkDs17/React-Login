import express = require('express')
import { getRepository } from "typeorm"
import { Employee } from '../../entity/Employee'
import { JsonHandler } from '../../services/JsonHandler'
const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const employees: Employee[] = await getRepository(Employee).find({ relations: ["company"] })
  res.send(employees)
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const employeeId: string = req.params.id
  const employee: Employee = await getRepository(Employee).findOne({
    where: {
        id: employeeId
    },
    relations: ["company"]
  })

  res.send(employee)
})

router.post('/', async (req: express.Request, res: express.Response) => {
  const employee: Employee = new Employee()
  const data: any = req.body

  if (!data.name) {
      res.status(400)
      const response: JsonHandler = JsonHandler.JsonResponse(false, "Champ 'nom' requis",res.statusCode)
      res.send(response)
  }

  employee.name = data.name   
  employee.company = data.company
  await getRepository(Employee).save(employee)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Employé créé')
  res.send(response)
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
  const employeeId: string = req.params.id
  const employee: Employee = await getRepository(Employee).findOne(employeeId)
  const data: any = JsonHandler.clearInput(req.body)

  employee.name = data.name    
  await getRepository(Employee).save(employee)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Employé edité')
  res.send(response)
})

router.delete('/:id', async (req: express.Request, res: express.Response) => {
  const employeeId: string = req.params.id
  const employee: Employee = await getRepository(Employee).findOne(employeeId)

  await getRepository(Employee).remove(employee)

  const response: JsonHandler = JsonHandler.JsonResponse(true, 'Employé supprimé')
  res.send(response)
})

module.exports = router;
