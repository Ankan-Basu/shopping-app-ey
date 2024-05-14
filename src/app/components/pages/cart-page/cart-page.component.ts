import { Component } from '@angular/core';
import { CartItemComponent } from '../../base-components/cart-item/cart-item.component';
import { CartBillComponent } from '../../base-components/cart-bill/cart-bill.component';
import { CommonModule } from '@angular/common';
import { SidebarUserComponent } from '../../base-components/sidebar-user/sidebar-user.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [SidebarUserComponent, CartItemComponent, CartBillComponent, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
