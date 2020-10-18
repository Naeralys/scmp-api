const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.applicationDefault()
})
const db = admin.firestore()

import { CustomerRepo } from './Customer'

export const customerRepo = new CustomerRepo(db)
