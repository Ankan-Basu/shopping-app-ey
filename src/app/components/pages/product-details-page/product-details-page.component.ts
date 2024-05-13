import { Component } from '@angular/core';
import { CommentComponent } from '../../base-components/comment/comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent {

}
