import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-bill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-bill.component.html',
  styleUrl: './cart-bill.component.css'
})
export class CartBillComponent {
  subtotal = 12000;
  tax = 0.18;
  discount = 0.10;
  walletBalance = 20000;
  promocode = '';

  totalWoDiscount = (this.subtotal + this.subtotal * this.tax);
  total = this.totalWoDiscount - this.totalWoDiscount * this.discount;

}
