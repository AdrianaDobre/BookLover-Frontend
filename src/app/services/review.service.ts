import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Review} from "../interfaces/review";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  addReview(review: Review):Observable<HttpResponse<string>> {
    return this.http.post<string>("basePath/review/addReview", {
      reviewDate: review.reviewDate,
      comment: review.comment,
      reviewRating: review.reviewRating,
      email: review.email,
      title: review.title,
      belongsToUser: review.belongsToUser
    }, {
      observe: 'response',
      responseType: 'text' as 'json'
    })
  }
}
