import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders-item.component.html',
  styleUrl: './orders-item.component.css'
})
export class OrdersItemComponent {

}
