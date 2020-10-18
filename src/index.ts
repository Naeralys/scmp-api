const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const { PORT = '3000' } = process.env

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

import CustomerController from './Controllers/Customer'

app.use('/customer', CustomerController)

app.get('/', (req: any, res: any) => {
  console.log('SCMP api endpoint')
  res.status(200).send('SCMP api endpoint')
})

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})

module.exports = app
