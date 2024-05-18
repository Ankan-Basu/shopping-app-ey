import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrdersItemComponent } from '../../base-components/orders-item/orders-item.component';

@Component({
  selector: 'app-admin-orders-page',
  standalone: true,
  imports: [CommonModule, OrdersItemComponent],
  templateUrl: './admin-orders-page.component.html',
  styleUrl: './admin-orders-page.component.css'
})
export class AdminOrdersPageComponent {
  @Input() openedAsSubMenu = false;
}
