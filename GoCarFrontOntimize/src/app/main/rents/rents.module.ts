import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentsRoutingModule } from './rents-routing.module';
import { RentalsMyCarsHomeComponent } from './rentals-my-cars-home/rentals-my-cars-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [RentalsMyCarsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    RentsRoutingModule
  ]
})
export class RentsModule { }
