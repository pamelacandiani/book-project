import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormsComponent } from './books-forms.component';

describe('BooksFormsComponent', () => {
  let component: BooksFormsComponent;
  let fixture: ComponentFixture<BooksFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
