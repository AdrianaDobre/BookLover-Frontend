import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Credentials} from "../interfaces/credentials";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'basePath';

  constructor(private http: HttpClient) { }

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
}
