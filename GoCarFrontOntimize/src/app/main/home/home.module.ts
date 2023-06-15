import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ]
})
export class HomeModule { }
