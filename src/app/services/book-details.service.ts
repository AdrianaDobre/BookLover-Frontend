import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {HttpClient} from "@angular/common/http";
import {Review} from "../interfaces/review";

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  constructor(private http: HttpClient) { }

  getBookByTitle(title:string): Observable<Book> {
    return this.http.get<Book>('basePath/book/getBookByTitle?title='+title);
  }

  getReviewsByTitle(title:string): Observable<Review[]> {
    return this.http.get<Review[]>('basePath/review/getAllByBook?title=' + title);
  }
}
