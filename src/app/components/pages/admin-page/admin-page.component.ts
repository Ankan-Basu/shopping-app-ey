import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../base-components/sidebar-admin/sidebar-admin.component';
import { AdminReviewItemComponent } from '../../base-components/admin-review-item/admin-review-item.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [SidebarAdminComponent, AdminReviewItemComponent, RouterLink, RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
