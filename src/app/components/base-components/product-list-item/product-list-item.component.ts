import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {

}
