import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { INglDatatableSort } from 'ng-lightning';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'alinta-angular-test';
  customers: Customer[] = [];
  customersSearch: Customer[] = [];
  customerService;
  searchTerm = '';

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
      this.customersSearch = customers;
    });
  }

  search(): void {
    const term = this.searchTerm;

    this.customers = [...this.customersSearch.filter(customer => {
      return (customer.firstName.includes(term) || customer.lastName.includes(term));
    })];
  }
}
