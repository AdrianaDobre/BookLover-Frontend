import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  checkLogged(): boolean {
    return this.authService.isLogged(this.getToken());
  }

  logout() {
    this.authService.logout();
  }

  private getToken(): string | null {
    return window.localStorage.getItem('token');
  }
}
