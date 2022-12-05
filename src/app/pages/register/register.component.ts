import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutes} from "../../app-routing.module";
import {RegisterService} from "../../services/register/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit{
  public registerForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    })
  }

  doRegister() {
    console.log(this.registerForm);
    this.registerService.doRegistration({
      email: (this.registerForm.get('email') as FormControl).value,
      password: (this.registerForm.get('password') as FormControl).value,
      firstName: (this.registerForm.get('firstName') as FormControl).value,
      lastName: (this.registerForm.get('lastName') as FormControl).value
    }).subscribe(res => {
      this.goToLogin();
    });
  }

  goToLogin() {
    this.router.navigate([AppRoutes.LOGIN]);
  }

  onHomeClick() {
    this.router.navigate([AppRoutes.HOME]);
  }
}
