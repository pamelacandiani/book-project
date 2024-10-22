import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-forms',
  templateUrl: './books-forms.component.html',
  styleUrl: './books-forms.component.css'
})
export class BooksFormsComponent {

  formGroupBooks: FormGroup;

  constructor(private router: Router,
    private FormBuilder: FormBuilder,
    private service: BooksService,
    
    ){

  this.formGroupBooks = FormBuilder.group({
    id         : [''],
    title      : [''],
    author     : [''],
    publisher  : [''],
    price      : ['']
  });
  }

  save(){
    this.service.save(this.formGroupBooks.value).subscribe({
      next:() => this.router.navigate(['books'])
    })
  }

}
