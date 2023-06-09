import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : ':car_id', component : HomeDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
