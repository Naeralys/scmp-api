const { Datastore } = require('@google-cloud/datastore')

const datastore = new Datastore()

import { CustomerRepo } from './Customer'
export const customerRepo = new CustomerRepo(datastore)
