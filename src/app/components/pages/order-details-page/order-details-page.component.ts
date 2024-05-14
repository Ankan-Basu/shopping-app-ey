import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderDetailsComponent } from '../../base-components/order-details/order-details.component';
import { SidebarUserComponent } from '../../base-components/sidebar-user/sidebar-user.component';

@Component({
  selector: 'app-order-details-page',
  standalone: true,
  imports: [CommonModule, OrderDetailsComponent, SidebarUserComponent],
  templateUrl: './order-details-page.component.html',
  styleUrl: './order-details-page.component.css'
})
export class OrderDetailsPageComponent {

}
