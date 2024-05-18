import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminReviewsPageComponent } from '../admin-reviews-page/admin-reviews-page.component';
import { AdminOrdersPageComponent } from '../admin-orders-page/admin-orders-page.component';

@Component({
  selector: 'app-admin-users-details-page',
  standalone: true,
  imports: [CommonModule, AdminReviewsPageComponent, AdminOrdersPageComponent],
  templateUrl: './admin-users-details-page.component.html',
  styleUrl: './admin-users-details-page.component.css'
})
export class AdminUsersDetailsPageComponent {
  showOrdersList = false;
  showReviewsList = false;

  toggleOrdersListDisplay() {
    this.showOrdersList = !this.showOrdersList;
  }

  toggleReviewsListDisplay() {
    this.showReviewsList = !this.showReviewsList;
  }
}
