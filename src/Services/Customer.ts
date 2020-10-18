import { ICustomerRepo } from '../Repositories/Customer'
import { customerRepo } from '../Repositories/'
import { Customer } from '../Types/Customer'

interface ICustomerService {
  getAll: () => Promise<Customer[]>
  getById: (id: string) => Promise<Customer>
}

class CustomerService implements ICustomerService {
  constructor (private customerRepo: ICustomerRepo) {}

  public getAll = (): Promise<Customer[]> => this.customerRepo.getAll()
  public getById = (id: string): Promise<Customer> =>
    this.customerRepo.getById(id)
}

export default new CustomerService(customerRepo)
