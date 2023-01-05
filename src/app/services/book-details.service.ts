import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Review} from "../interfaces/review";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getBookByTitle(title: string): Observable<Book> {
    return this.http.get<Book>('basePath/book/getBookByTitle?title=' + title);
  }

  getReviewsByTitle(title: string): Observable<Review[]> {
    return this.http.get<Review[]>('basePath/review/getAllByBook?title=' + title);
  }

  deleteReview(review: Review): Observable<void> {
    let date = this.datePipe.transform(review.reviewDate, "yyyy-MM-dd HH:mm:ss");
    if (date == null){
      date = '';
    }
    // let options = {
    //   "reviewDate": review.reviewDate,
    //   "comment": review.comment,
    //   "reviewRating": review.reviewRating,
    //   "email": review.email,
    //   "title": review.title
    // }
    // et httpParams = new HttpParams();
    // httpParams.set('reviewDate', date);
    // httpParams.set('comment', review.comment);
    // httpParams.set('reviewRating', review.reviewRating);
    // httpParams.set('email', review.email);
    // httpParams.set('title', review.title);
    // let options = { params: httpParams };l

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        "reviewDate": review.reviewDate,
        "comment": review.comment,
        "reviewRating": review.reviewRating,
        "email": review.email,
        "title": review.title
      },
    };

    return this.http.delete<void>("basePath/review/deleteReview", options);
  }
}
