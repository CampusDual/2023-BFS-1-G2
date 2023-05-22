import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormuserComponent } from './formuser/formuser.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'registrarme', component: FormuserComponent},
  // {path: '', redirectTo: '', pathMatch: 'full' },
   {path: 'loguearme', component: LoginComponent},
  {path: '', component: InicioComponent},
  {path: 'loguearme/home', component: HomeComponent}, //cuando se definen las rutas lo hacemos con el path completo
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
