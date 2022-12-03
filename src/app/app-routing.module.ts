import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";

export enum AppRoutes{
  HOME='home',
  LOGIN='login',
  REGISTER='register'
}
const routes: Routes = [
  {path:'', redirectTo: AppRoutes.HOME, pathMatch:'full'},
  {path: AppRoutes.HOME,component: HomeComponent},
  {path: AppRoutes.LOGIN, component: LoginComponent},
  {path: AppRoutes.REGISTER, component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
