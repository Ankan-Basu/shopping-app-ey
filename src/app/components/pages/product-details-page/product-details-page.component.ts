import { Component } from '@angular/core';
import { CommentComponent } from '../../base-components/comment/comment.component';
import { CommonModule } from '@angular/common';
import { ReviewInputComponent } from '../../base-components/review-input/review-input.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommentComponent, CommonModule, ReviewInputComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent {

}
