import {Component, OnInit} from '@angular/core';
import {AppRoutes} from "../../app-routing.module";
import {Router} from "@angular/router";
import {Book} from "../../interfaces/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit{
  public books!: Array<Book>;

  constructor(private router:Router, private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(result => {
      this.books = result;
    })
  }

  goToBook(title: string) {
    this.router.navigate([AppRoutes.BOOK+title]);
  }
}
