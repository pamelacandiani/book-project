import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Books[] = []

  constructor(private service: BooksService){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.service.getBooks().subscribe({
      next: data => this.books = data
    })
  }

}
