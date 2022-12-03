import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutes} from "../../app-routing.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate([AppRoutes.REGISTER]);
  }

  goToLogin() {
    this.router.navigate([AppRoutes.LOGIN]);
  }
}
