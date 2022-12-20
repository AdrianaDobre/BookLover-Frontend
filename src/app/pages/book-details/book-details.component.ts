import {Component, OnInit} from '@angular/core';
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
  public bookReviews: Review[] = [];
  constructor(private activatedRoute: ActivatedRoute, private bookDetailsService: BookDetailsService,private datePipe:DatePipe) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getReviewsDetailsByTitle(param['title']);
      this.getBookDetailsByTitle(param['title']);
    })
  }

  public getBookDetailsByTitle(title: string){
    this.bookDetailsService.getBookByTitle(title).subscribe(result => {
      this.book = result;
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
}
