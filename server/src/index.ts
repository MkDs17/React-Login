import "reflect-metadata";
import { createConnection } from "typeorm"
import { Request, Response } from "express";
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

// Log requests to the console.
app.use(logger('dev'))
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes 
const companyRoutes = require('./routes/api/Company')
const employeeRoutes = require('./routes/api/Employee')

app.use('/api/companies', companyRoutes)
app.use('/api/employees', employeeRoutes)

app.use('/api', (req: Request, res: Response) => res.send({
    message: 'Welcome to the API dude!',
}))
app.use('/', (req: Request, res: Response) => res.send({
    message: 'Welcome to the beginning of nothingness.',
}))

app.listen(PORT, () => {
    createConnection()
        .then(() => console.log('Database connected'))
        .catch(error => console.log(error))
    console.log(`Server running on port ${PORT}`)
})
