import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  book: Book = new Book();
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }

  create() {
    this.bookService.createBook(this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }
}
