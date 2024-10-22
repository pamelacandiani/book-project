import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Books[] = []

  constructor(private service: BooksService, private router: Router){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.service.getBooks().subscribe({
      next: data => this.books = data
    })
  }

  delete(books: Books){
    this.service.delete(books).subscribe({
      next: () => this.loadBooks()
    })
  }

  create(){
    this.router.navigate(['books-forms'])
  }
}
