import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuserComponent } from './formuser/formuser.component';


const routes: Routes = [
  {path: 'registrarme', component: FormuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
