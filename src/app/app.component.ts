import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'alinta-angular-test';
  customers = [];
  customerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(customers => {
      console.log('Customers', customers);
    });
  }

}
