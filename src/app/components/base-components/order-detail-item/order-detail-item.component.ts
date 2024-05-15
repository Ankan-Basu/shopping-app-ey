import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-detail-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-detail-item.component.html',
  styleUrl: './order-detail-item.component.css'
})
export class OrderDetailItemComponent {

}
