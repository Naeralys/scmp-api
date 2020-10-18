import CustomerService from '../Services/Customer'

const express = require('express')
const router = express.Router({ mergeParams: true })

router.get('/getCustomers', (req: any, res: any) => {
  CustomerService.getAll()
    .then(customers => res.status(200).send(customers))
    .catch(error => res.send(400).send(error))
})

router.get('/getCustomer?:id', (req: any, res: any) => {
  const customerId: string = req.params.id
  CustomerService.getById(customerId)
    .then(customer => res.status(200).send(customer))
    .catch(error => res.send(400).send(error))
})

export default router
