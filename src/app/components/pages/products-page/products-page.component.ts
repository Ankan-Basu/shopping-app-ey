import { Component } from '@angular/core';
import { ProductsFilterComponent } from '../../base-components/products-filter/products-filter.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsFilterComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
