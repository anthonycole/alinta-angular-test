import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private localStorageIdentifer = 'customers';
  customers = new Subject<Customer[]>();

  private readonly customerSource = new BehaviorSubject<Customer[]>([]);

  private getCustomers(): Customer[] {
    return JSON.parse(localStorage.getItem(this.localStorageIdentifer)) || [];
  }

  private setCustomers(customers: Customer[]): void {
    localStorage.setItem(this.localStorageIdentifer, JSON.stringify(customers));
    this.customerSource.next(customers);
  }

  getAllCustomers(): Observable<Customer[]> {
    this.setCustomers(this.getCustomers());
    return this.customerSource.asObservable();
  }

  addCustomer(customer: Customer): void {
    const updatedCustomers = [...this.getCustomers(), customer];
    this.setCustomers(updatedCustomers);
  }

  editCustomer(id: number, updatedCustomer: Customer): void {
    const customers = this.getCustomers();
    customers[id] = updatedCustomer;
    this.setCustomers(customers);
  }

  removeCustomer(id: number): void {
    let customers = this.getCustomers();
    const updatedCustomers = customers.splice(id, id);
    this.setCustomers(updatedCustomers);
  }
}
