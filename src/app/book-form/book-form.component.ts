import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  book = {
    title: "dummy title 1",
    description: "dummy description",
    unitCost: "123",
    isbn: "123-456-7890",
    nbOfPages: "456",
    language: "English",
    imageURL: "http://ecx.images-amazon.com/images/I/51bjnhlGbeL._SL160_.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
