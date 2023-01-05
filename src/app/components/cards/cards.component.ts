import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../interfaces/book";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  @Input() allBooks: Book[] = [];
  @Output() onGoToBook = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
  }

  goToBook(title: string) {
    this.onGoToBook.emit(title);
  }
}
