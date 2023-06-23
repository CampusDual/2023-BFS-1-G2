import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsMyCarsHomeComponent } from './rentals-my-cars-home/rentals-my-cars-home.component';


const routes: Routes = [
  {path : '',  component : RentalsMyCarsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentsRoutingModule { }
