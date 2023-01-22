import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {AppRoutes} from "../../app-routing.module";
import {Book} from "../../interfaces/book";

@Component({
  selector: 'app-books-reviewed',
  templateUrl: './books-reviewed.component.html',
  styleUrls: ['./books-reviewed.component.css']
})
export class BooksReviewedComponent implements OnInit{
  public booksReviewed!: Array<Book>;

  constructor(private router:Router, private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooksReviewed().subscribe(result => {
      this.booksReviewed = result;
    })
  }

  goToBook(title: string) {
    this.router.navigate([AppRoutes.BOOK+title]);
  }
}
