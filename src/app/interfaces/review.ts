export class Review {
  reviewDate: Date;
  comment: string;
  reviewRating: number;
  email: string;
  title: string;
  belongsToUser: boolean;


  constructor(reviewDate: Date, comment: string, reviewRating: number, email: string, title: string, belongsToUser: boolean) {
    this.reviewDate = reviewDate;
    this.comment = comment;
    this.reviewRating = reviewRating;
    this.email = email;
    this.title = title;
    this.belongsToUser = belongsToUser;
  }
}
