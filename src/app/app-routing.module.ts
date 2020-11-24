import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path:'',
    component:LoginComponent,pathMatch: 'full'
  },
  {
    path: 'Recuperar',
    component: RecuperarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
