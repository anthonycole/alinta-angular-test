import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';
import { AddCustomerModalComponent } from './add-customer-modal/add-customer-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditCustomerModalComponent } from './edit-customer-modal/edit-customer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerModalComponent,
    EditCustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NglModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
