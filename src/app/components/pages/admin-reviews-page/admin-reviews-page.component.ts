import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../base-components/sidebar-admin/sidebar-admin.component';
import { CommonModule } from '@angular/common';
import { AdminReviewItemComponent } from '../../base-components/admin-review-item/admin-review-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-reviews-page',
  standalone: true,
  imports: [SidebarAdminComponent, AdminReviewItemComponent, CommonModule],
  templateUrl: './admin-reviews-page.component.html',
  styleUrl: './admin-reviews-page.component.css'
})
export class AdminReviewsPageComponent {

}
