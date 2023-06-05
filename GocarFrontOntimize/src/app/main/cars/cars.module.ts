import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsNewComponent } from './cars-new/cars-new.component';


@NgModule({
  declarations: [CarsHomeComponent, CarsDetailComponent, CarsNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
