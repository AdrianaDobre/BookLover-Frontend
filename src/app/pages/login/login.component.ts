import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Credentials} from "../../interfaces/credentials";
import {AppRoutes} from "../../app-routing.module";

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

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  doLogin() {
    this.error = false;
    if (this.user.email && this.user.password) {
      console.log(this.user)
    } else {
      this.error = 'Enter your email and password';
    }
  }

  goToRegister() {
    this.router.navigate([AppRoutes.REGISTER]);
  }
}
