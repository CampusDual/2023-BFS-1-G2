import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuserComponent } from './formuser/formuser.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'registrarme', component: FormuserComponent},
  // {path: '', redirectTo: '', pathMatch: 'full' },
   {path: 'loguearme', component: LoginComponent},
  {path: '', component: InicioComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
