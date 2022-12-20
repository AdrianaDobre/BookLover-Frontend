import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  doRegistration(user:User):Observable<HttpResponse<string>> {
    return this.http.post<string>("basePath/register", {
      "email": user.email,
      "password": user.password,
      "firstName": user.firstName,
      "lastName": user.lastName
    }, {
      observe: 'response',
      responseType: 'text' as 'json'
    })
  }
}
