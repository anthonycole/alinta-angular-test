import { Component, OnInit, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer-modal',
  templateUrl: './edit-customer-modal.component.html',
})
export class EditCustomerModalComponent implements OnInit {

  @Input() index: number;
  @Input() customer: Customer;

  opened = false;
  submitted = false;
  showToast = false;
  editCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  get f(): any { return this.editCustomerForm.controls; }

  ngOnInit(): void {
    this.editCustomerForm = this.fb.group({
      firstName: new FormControl(this.customer.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.customer.lastName, [
        Validators.required,
      ]),
    });
  }

  open(): void {
    this.opened = !this.opened;
  }

  cancel(): void {
    this.opened = false;
    this.editCustomerForm.reset();
  }

  save(): void {
    this.submitted = true;
    if (this.editCustomerForm.valid) {
      const customer = { ...this.customer, ...this.editCustomerForm.value };
      this.customerService.editCustomer(this.index, customer);
      this.editCustomerForm.reset();
      this.showToast = true;
      this.opened = false;
      this.submitted = false;
    }
  }
}