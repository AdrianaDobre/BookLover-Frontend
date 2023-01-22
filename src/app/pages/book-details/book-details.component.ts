import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../interfaces/book";
import {BookDetailsService} from "../../services/book-details.service";
import {Review} from "../../interfaces/review";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  public book!: Book;
  public titleBook! : string;
  public bookReviews: Review[] = [];
  public panelOpenState: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private bookDetailsService: BookDetailsService,private datePipe:DatePipe) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getReviewsDetailsByTitle(param['title']);
      this.getBookDetailsByTitle(param['title']);
      this.titleBook = param['title'];
    })
  }

  public getBookDetailsByTitle(title: string){
    this.bookDetailsService.getBookByTitle(title).subscribe(result => {
      this.book = result;
      console.log(this.book.averageRating);
    });
  }
  public getReviewsDetailsByTitle(title: string){
    this.bookDetailsService.getReviewsByTitle(title).subscribe(result => {
      this.bookReviews = result;
    });
  }

  public transformDateToString(date: Date): string | null {
    return this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss")
  }

  public numberOfReviews(): number{
    return this.bookReviews.length;
  }

  public deleteReview(review:Review){
    this.bookDetailsService.deleteReview(review).subscribe();
    this.bookReviews = this.bookReviews.filter((reviewBook : Review) =>
      reviewBook != review
    )
  }

  public addBookReview(review: Review){
    let sum: number = this.book.averageRating * this.bookReviews.length + Number(review.reviewRating);
    this.bookReviews.push(review);
    this.book.averageRating = sum/this.bookReviews.length;
  }
}
