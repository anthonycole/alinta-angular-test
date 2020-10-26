import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { Customer } from './customer';


describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
    let dataStore = {};

    const localStorageMock = {
      getItem: (key: string): string => {
          return key in dataStore ? dataStore[key] : null;
      },
      setItem: (key: string, value: string) => {
          dataStore[key] = `${value}`;
      },
      removeItem: (key: string) => {
          delete dataStore[key];
      },
      clear: () => {
          dataStore = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(localStorageMock.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(localStorageMock.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(localStorageMock.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(localStorageMock.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllCustomers', () => {
    it('should get all Customers',
      async (done) => {
        const customersList: Customer[] = [
          {firstName: 'James', lastName: 'Collins', dateOfBirth: '3/3/1991'}
        ];

        const customersString = JSON.stringify(customersList);
        localStorage.setItem('customers', customersString);
        service.getAllCustomers().subscribe(customers => {
          expect(customers).toEqual(customersList);
          done();
        });
    });
  });

  describe('addCustomer', () => {
    it('should add a new customer',
      async (done) => {
        const customer = { firstName: 'Paul', lastName: 'Keating', dateOfBirth: '22/3/1990'};
        service.addCustomer(customer);
        service.getAllCustomers().subscribe(customers => {
          expect(customers).toEqual([customer]);
          done();
        });
    });
  });

  describe('editCustomer', () => {
    it('should edit an existing customer',
      async (done) => {
        const customersList: Customer[] = [
          {firstName: 'Gough', lastName: 'Whitlam', dateOfBirth: '3/3/1991'}
        ];

        const customersString = JSON.stringify(customersList);
        localStorage.setItem('customers', customersString);
        const customer = {firstName: 'Malcolm', lastName: 'Fraser', dateOfBirth: '22/3/1990'};
        service.editCustomer(0, customer);
        service.getAllCustomers().subscribe(customers => {
          expect(customers).toEqual([customer]);
          done();
        });
    });
  });

  describe('deleteCustomer', () => {
    it('should delete an existing customer',
      async (done) => {
        const customersList: Customer[] = [
          {firstName: 'Gough', lastName: 'Whitlam', dateOfBirth: '3/3/1991'}
        ];

        const customersString = JSON.stringify(customersList);
        localStorage.setItem('customers', customersString);
        service.removeCustomer(0);
        service.getAllCustomers().subscribe(customers => {
          expect(customers).toEqual([]);
          done();
        });
    });
  });
});
