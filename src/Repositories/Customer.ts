import { Customer } from '../Types/Customer'
import { IDatabase } from '../Types/Database'

export interface ICustomerRepo {
  getAll: () => Promise<Customer[]>
  getById: (id: string) => Promise<Customer>
}

export class CustomerRepo implements ICustomerRepo {
  constructor (private db: IDatabase) {}

  public getAll = () =>
    this.db
      .collection('customers')
      .get()
      .then(this.convertDataArrayToCustomers)
  public getById = (id: string) =>
    this.db
      .collection('customers')
      .doc(id)
      .get(id)
      .then(this.convertDataToCustomer)

  private convertDataArrayToCustomers = (data: any) =>
    data.docs.map(this.convertDataToCustomer)

  private convertDataToCustomer = (data: any) => {
    if (data && data.data())
      return {
        id: data.id,
        firstName: data.data().firstName,
        lastName: data.data().lastName,
        phone: data.data().phone,
        email: data.data().email
      } as Customer
    else return null
  }
}
