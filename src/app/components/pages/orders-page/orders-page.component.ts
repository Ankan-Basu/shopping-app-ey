import { Component } from '@angular/core';
import { SidebarUserComponent } from '../../base-components/sidebar-user/sidebar-user.component';
import { OrdersItemComponent } from '../../base-components/orders-item/orders-item.component';
import { CommonModule } from '@angular/common';
import { OrdersFilterComponent } from '../../base-components/orders-filter/orders-filter.component';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [SidebarUserComponent, OrdersItemComponent, CommonModule, OrdersFilterComponent],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent {

}
