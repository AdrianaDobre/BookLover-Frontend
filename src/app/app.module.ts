import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AuthInterceptor } from './services/authconfig.interceptor';
import {AuthService} from "./services/auth.service";
import {MatIconModule} from '@angular/material/icon';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import {DatePipe} from "@angular/common";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { BooksReviewedComponent } from './pages/books-reviewed/books-reviewed.component';
import {MatButtonModule} from "@angular/material/button";
import { AddReviewComponent } from './pages/add-review/add-review.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    BookDetailsComponent,
    NavbarComponent,
    CardsComponent,
    BooksReviewedComponent,
    AddReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    },
    AuthService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
