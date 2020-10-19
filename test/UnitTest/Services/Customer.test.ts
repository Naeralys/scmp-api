import { CustomerService } from '../../../src/Services/Customer'
import { CustomerRepo } from '../../../src/Repositories/Customer'
import { Customer } from '../../../src/Types/Customer'

jest.mock('../../../src/Repositories/Customer')

const customerService = new CustomerService(new CustomerRepo(null))

describe('Customer service', () => {
  const fakeCustomer: Customer = {
    id: '01',
    firstName: 'Adam',
    lastName: 'Lind',
    email: 'adamlind@live.se',
    phone: '07085500633'
  }
  const fakeCustomerArray: Customer[] = [fakeCustomer]
  it('Returns an array of customers on success', async () => {
    CustomerRepo.prototype.getAll = jest
      .fn()
      .mockImplementationOnce(async () => fakeCustomerArray)
    const actual = await customerService.getAll()
    const expected = fakeCustomerArray
    expect(actual).toEqual(expected)
  })
  it('Returns a single customer on success', async () => {
    CustomerRepo.prototype.getById = jest
      .fn()
      .mockImplementationOnce(async () => fakeCustomer)
    const actual = await customerService.getById('01')
    const expected = fakeCustomer
    expect(actual).toEqual(expected)
  })
})
