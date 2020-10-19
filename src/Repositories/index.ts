const { Firestore } = require('@google-cloud/firestore')
const firestore = new Firestore()

import { CustomerRepo } from './Customer'
export const customerRepo = new CustomerRepo(firestore)
