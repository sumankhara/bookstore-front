import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from '../service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book: Book = new Book();
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['bookId'])
      .switchMap(id => this.bookService.getBook(id))
      .subscribe(book => this.book = book);
  }

  delete() {
    this.bookService.deleteBook(this.book.id)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }
}
