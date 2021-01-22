import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftFormComponent } from './left-form.component';
import { DealFormComponent } from './deal-form/deal-form.component';
import { ContacFormComponent } from './contac-form/contac-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';



@NgModule({
  declarations: [LeftFormComponent, DealFormComponent, ContacFormComponent, CustomerFormComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftFormComponent]
})
export class LeftFormModule { }
