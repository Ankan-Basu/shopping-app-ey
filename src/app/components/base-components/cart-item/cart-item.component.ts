import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, DropdownComponent, RouterLink],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

}
