import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReviewedComponent } from './books-reviewed.component';

describe('BooksReviewedComponent', () => {
  let component: BooksReviewedComponent;
  let fixture: ComponentFixture<BooksReviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksReviewedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
