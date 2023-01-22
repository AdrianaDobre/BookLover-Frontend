import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReviewService} from "../../services/review.service";
import {Review} from "../../interfaces/review";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  public reviewForm!: FormGroup;
  public review: Review = new Review(new Date(),'',0,'','',true);

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService, private authService: AuthService) {
  }

  @Input() title = '';
  @Output() newReviewEvent = new EventEmitter<Review>();
  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(3)]],
      reviewRating: ['', [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(5),Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
    })
  }
  createReview() {
    this.review.title = this.title;
    this.review.reviewRating = (this.reviewForm.get('reviewRating') as FormControl).value;
    this.review.comment = (this.reviewForm.get('comment') as FormControl).value
    this.review.reviewDate = new Date();
    this.reviewService.addReview(this.review).subscribe(res => {});
    this.newReviewEvent.emit(this.review);
  }

  addReview(){
    this.authService.getEmail().subscribe(res => {
      this.review.email = res;
      this.createReview();
    })
  }
}
