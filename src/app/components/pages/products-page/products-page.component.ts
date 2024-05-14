import { Component } from '@angular/core';
import { ProductsFilterComponent } from '../../base-components/products-filter/products-filter.component';
import { ProductListItemComponent } from '../../base-components/product-list-item/product-list-item.component';
import { CommonModule } from '@angular/common';
import { IProductsFilter } from '../../../interfaces/iproducts-filter';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsFilterComponent, ProductListItemComponent, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  updateFilters(category: IProductsFilter) {
    console.log('In parent', category);
  }

}