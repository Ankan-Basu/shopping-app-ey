import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderDetailItemComponent } from '../order-detail-item/order-detail-item.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, OrderDetailItemComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

}
