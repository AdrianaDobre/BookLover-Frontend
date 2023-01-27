import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Credentials} from "../../interfaces/credentials";
import {AppRoutes} from "../../app-routing.module";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public myForm!: FormGroup;

  public error: string | boolean = false;

  constructor(private router:Router,private authService:AuthService,private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fromBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doLogin() {
    this.error = false;
    if (this.myForm.controls['email'].value && this.myForm.controls['password'].value) {
      this.authService.login({
        email: this.myForm.controls['email'].value,
        password: this.myForm.controls['password'].value
      }).subscribe((loginToken: HttpResponse<string>) => {
        if (typeof loginToken.body === "string") {
          window.localStorage.setItem('token', loginToken.body);
          this.router.navigate(['/home']);
        }
      }, error => {this.error = 'Wrong email or password'})
    }
  }

  goToRegister() {
    this.router.navigate([AppRoutes.REGISTER]);
  }

  onHomeClick() {
    this.router.navigate([AppRoutes.HOME]);
  }
}
