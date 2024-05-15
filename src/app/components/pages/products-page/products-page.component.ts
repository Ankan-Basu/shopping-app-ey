import { Component } from '@angular/core';
import { ProductsFilterComponent } from '../../base-components/products-filter/products-filter.component';
import { ProductListItemComponent } from '../../base-components/product-list-item/product-list-item.component';
import { CommonModule } from '@angular/common';
import { CategoryType, IProductsFilter } from '../../../interfaces/iproducts-filter';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsFilterComponent, ProductListItemComponent, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  filterOptions: IProductsFilter;
  headingText: string;

  constructor() {
    this.filterOptions = {
      clothes: {
        masterCategory: false,
        "Men's Wear": false,
        "Women's Wear": false,
        "Kid's Wear": false
      },
      furnitures: {
        masterCategory: false,
        "Dining Tables": false,
        Chairs: false,
        Cupboards: false
      },
      electronics: {
        masterCategory: false,
        Mobiles: false,
        Tablets: false,
        Laptops: false,
        "Smart Watches": false
      },
      books: {
        masterCategory: false,
        Fiction: false,
        Biography: false,
        Thriller: false
      },
      price: [undefined, undefined]
    };
    this.headingText = 'All Products';
  }

  updateFilters(category: IProductsFilter) {
    this.filterOptions = category;
    // console.log('In parent', category);
    console.log(this.getPageHeading());
  }

  getPageHeading() {
    const categories = Object.keys(this.filterOptions);
    let selectedCategory: string = '';
    let count = 0;
    let selectedSubCategory: string = '';

    // if (this.filterOptions.price[0] !== undefined || this.filterOptions.price[1] !== undefined) {
    //   return 'Filtered Results';
    // }

    categories.forEach(category => {
        if (this.filterOptions[category as CategoryType].masterCategory) {
            selectedCategory = category;
            count++;
        }
    });

    if (count > 1 || (this.filterOptions.price[0] !== undefined || this.filterOptions.price[1] !== undefined)) {
      // More than 1 category selected
      this.headingText = 'Filtered Results';
      return 'Filtered Results';
    } else if (selectedCategory) {
      const subCategories = Object.keys(this.filterOptions[selectedCategory as CategoryType]);
      let subCount = 0;

      subCategories.forEach(subCategory => {
          if (subCategory !== 'masterCategory' && this.filterOptions[selectedCategory as CategoryType][subCategory]) {
              selectedSubCategory = subCategory;
              subCount++;
          }
      });

      if (subCount === 1) {
        // 1 subcartegory slected
        this.headingText = selectedSubCategory;
          return selectedSubCategory;
      } else if (subCount > 1) {
          return 'Filtered Results';
      } else {
        //  0 sub cat selected;
        this.headingText = selectedCategory;
        return selectedCategory;
      }
  } else {
    // console.log(this.filterOptions.price[0], this.filterOptions.price[1])
    this.headingText = 'All Products';  
    return 'Here';
  }
  // return null;
  }
}