import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from '../component/progressbar/progressbar.module';



@NgModule({
  declarations: [Layout1Component],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ProgressbarModule,

    SharedModule
  ],
  exports: [Layout1Component]
})
export class Layout1Module { }
