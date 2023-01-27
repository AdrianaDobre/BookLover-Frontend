import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BooksComponent} from "./pages/books/books.component";
import {BookDetailsComponent} from "./pages/book-details/book-details.component";
import {BooksReviewedComponent} from "./pages/books-reviewed/books-reviewed.component";
import {AuthGuard} from "./guards/auth.guard";

export enum AppRoutes{
  HOME='home',
  LOGIN='login',
  REGISTER='register',
  BOOKS = 'books',
  BOOK = 'book/',
  BOOKSREVIEWD = 'booksReviewed'

}
const routes: Routes = [
  {path:'', redirectTo: AppRoutes.HOME, pathMatch:'full'},
  {path: AppRoutes.HOME,component: HomeComponent},
  {path: AppRoutes.LOGIN, component: LoginComponent},
  {path: AppRoutes.REGISTER, component: RegisterComponent},
  {path: AppRoutes.BOOKS, component: BooksComponent,canActivate: [AuthGuard]},
  {path: AppRoutes.BOOK+':title', component: BookDetailsComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.BOOKSREVIEWD, component: BooksReviewedComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: AppRoutes.HOME}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
