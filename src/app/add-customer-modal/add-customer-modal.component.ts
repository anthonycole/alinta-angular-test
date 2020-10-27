import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html'
})

export class AddCustomerModalComponent implements OnInit {
  opened = false;
  submitted = false;
  showToast = false;

  cleaveOptions = {
    date: true,
    delimiter: '/',
    datePattern: ['Y', 'm', 'd']
  };

  addCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  get f(): any { return this.addCustomerForm.controls; }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.required,
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        (control: FormControl) => {
          if (!(control.value instanceof Date)) {
            return null;
          }
        }
      ]),
    });
  }

  open(): void {
    this.opened = !this.opened;
  }

  cancel(): void {
    this.opened = false;
    this.addCustomerForm.reset();
  }

  save(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addCustomerForm.valid) {
      this.customerService.addCustomer(this.addCustomerForm.value);
      this.addCustomerForm.reset();
      this.showToast = true;
      this.opened = false;
      this.submitted = false;
    }
  }
}
