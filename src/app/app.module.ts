import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';
import { AddCustomerModalComponent } from './add-customer-modal/add-customer-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NglModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
