import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css'
})
export class ProductsFilterComponent {
  categories: ICategories = {
    clothes: ['Men\'s Wear', 'Women\'s Wear', 'Kid\'s Wear'],
    furnitures: ['Dining Tables', 'Chairs', 'Cupboards'],
    electronics: ['Mobiles', 'Tablets', 'Laptops', 'Smart Watches'],
    books: ['Fiction', 'Biography', 'Thriller']
  }

  selected = { 
    clothes: false,
    furnitures: false,
  electronics: false,
  books: false
};

  getCategories(): CategoryType[] {
    let keys: CategoryType[] = Object.keys(this.categories) as CategoryType[];
    return keys
  }

  selectCategory(category: 'clothes'|'furnitures'|'electronics'|'books'): void {
    console.log(`Selected ${category}`);
    this.selected = {...this.selected, [category]: !this.selected[category]};
    console.log(this.selected);
  }

  getSubCategoryOf(): CategoryType[] {
    return Object.keys(this.selected).filter(key => this.selected[key as CategoryType]) as CategoryType[];
  }

  isCategorySelected(): boolean {
    // let isSelected = false;
    // for (let category in this.selected) {
    //   if (this.selected[category as CategoryType]) {
    //     isSelected = true;
    //     break;
    //   }
    // }
    // return isSelected;
    return Object.values(this.selected).some(value => value);
  }
}

interface ICategories {
    clothes: string[],
    furnitures: string[],
    electronics: string[],
    books: string[]
}

type CategoryType = 'clothes'|'furnitures'|'electronics'|'books';

const categories: CategoryType[] = ['clothes', 'furnitures', 'electronics', 'books'];

