import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Credentials} from "../interfaces/credentials";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'basePath';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: Credentials): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.authUrl + '/auth', credentials, {
        headers: new HttpHeaders({
          'accept': 'text/plain',
        }),
        observe: 'response',
        responseType: 'text' as 'json'
      });
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLogged(token: string | null): boolean {
    if (token !== null) {
      if (!this.tokenExpired(token)) {
        return true;
      }
      this.logout();
      return false;
    }
    return false;
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
