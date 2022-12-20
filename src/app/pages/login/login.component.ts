import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Credentials} from "../../interfaces/credentials";
import {AppRoutes} from "../../app-routing.module";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public user: Credentials = {
    email: '',
    password: '',
  };
  public error: string | boolean = false;

  constructor(private router:Router,private authService:AuthService) {}

  ngOnInit(): void {
  }

  doLogin() {
    this.error = false;
    if (this.user.email && this.user.password) {
      this.authService.login({
        email: this.user.email,
        password: this.user.password
      }).subscribe((loginToken: HttpResponse<string>) => {
          if (typeof loginToken.body === "string") {
            window.localStorage.setItem('token', loginToken.body);
          }
          this.router.navigate([AppRoutes.BOOKS]);
        },
        (error) => {this.error = 'Wrong email or password'});
    } else {
      this.error = 'Enter your email and password';
    }
  }

  goToRegister() {
    this.router.navigate([AppRoutes.REGISTER]);
  }

  onHomeClick() {
    this.router.navigate([AppRoutes.HOME]);
  }
}
