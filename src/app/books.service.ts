import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Books []>{
    return this.http.get<Books  []>('http://localhost:3000/books')
  }


}
