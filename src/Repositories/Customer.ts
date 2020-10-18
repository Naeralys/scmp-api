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
      .runQuery(this.db.createQuery('customers'))
      .then(this.convertDataArrayToCustomers)
  public getById = (id: string) => {
    const query = this.db.createQuery('customers')
    const filter = query.filter('name', id)
    return this.db
      .runQuery(filter)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(error => {
        console.error(error)
        return error
      })
    //.then(data => this.convertDataToCustomer(data))
  }

  private convertDataArrayToCustomers = (data: [][]) =>
    data[0].map(this.convertDataToCustomer)

  private convertDataToCustomer = (data: any) => {
    console.log('CONVERT DATA')
    console.log(data)
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email
    } as Customer
  }
}
