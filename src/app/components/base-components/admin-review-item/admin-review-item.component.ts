import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-review-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-review-item.component.html',
  styleUrl: './admin-review-item.component.css'
})
export class AdminReviewItemComponent {

}
