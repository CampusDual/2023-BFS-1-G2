import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { UsersRoutingModule } from './users-routing.module';

import { UsersRegisterComponent } from './users-register/users-register.component';


@NgModule({
  declarations: [ UsersRegisterComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ],

})
export class UsersModule { }
