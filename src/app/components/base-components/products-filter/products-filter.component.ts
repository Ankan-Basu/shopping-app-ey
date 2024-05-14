import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { IProductsFilter } from '../../../interfaces/iproducts-filter';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css'
})
export class ProductsFilterComponent {
  @Output() categorySelected = new EventEmitter<IProductsFilter>()

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

  selected2: IProductsFilter = {
    clothes: {
      masterCategory: false,
      'Men\'s Wear': false, 
      'Women\'s Wear': false, 
      'Kid\'s Wear': false
    },
    furnitures: {
      masterCategory: false,
      'Dining Tables': false, 
      'Chairs': false, 
      'Cupboards': false
    },
    electronics: {
      masterCategory: false,
      'Mobiles': false, 
      'Tablets': false, 
      'Laptops': false, 
      'Smart Watches': false
    },
    books: {
      masterCategory: false,
      'Fiction': false, 
      'Biography': false, 
      'Thriller': false
    },
    price: [undefined, undefined]
  }

  getCategories(): CategoryType[] {
    let keys: CategoryType[] = Object.keys(this.categories) as CategoryType[];
    return keys
  }

  selectCategory(category: CategoryType): void {
    console.log(`Selected ${category}`);
    this.selected = { ...this.selected, [category]: !this.selected[category] };
    // console.log(this.selected);

    this.selected2[category].masterCategory = !this.selected2[category].masterCategory;

    console.log(this.selected2);
    // this.categorySelected.emit(category);
  }
  

  selectSubCategory(category: CategoryType, subcategory: string) {
    console.log('Category', category);
    this.selected2[category][subcategory] = !this.selected2[category][subcategory]

    console.log(this.selected2);
  }

  getSubCategoryOf(): CategoryType[] {
    return Object.keys(this.selected).filter(key => this.selected[key as CategoryType]) as CategoryType[];
  }

  isCategorySelected(): boolean {
    return Object.values(this.selected).some(value => value);
  }

  confirmFilter() {
    this.categorySelected.emit(this.selected2)
  }
}

interface ICategories {
  clothes: string[],
  furnitures: string[],
  electronics: string[],
  books: string[]
}

type CategoryType = 'clothes' | 'furnitures' | 'electronics' | 'books';

const categories: CategoryType[] = ['clothes', 'furnitures', 'electronics', 'books'];

// interface IProductsFilter {
//   clothes: IClothSubCat,
//   furnitures: IFurnituresSubCat,
//   electronics: IElectronicsSubCat,
//   books: IBooksSubCat,
//   price: [number | undefined, number | undefined]
// }

// interface IClothSubCat {
//   masterCategory: boolean,
//   'Men\'s Wear': boolean, 
//     'Women\'s Wear': boolean, 
//     'Kid\'s Wear': boolean,
//     [key: string]: boolean
// }

// interface IFurnituresSubCat {
//   masterCategory: boolean,
//     'Dining Tables': boolean, 
//     'Chairs': boolean, 
//     'Cupboards': boolean,
//     [key: string]: boolean
// }

// interface IElectronicsSubCat {
//   masterCategory: boolean,
//   'Mobiles': boolean, 
//   'Tablets': boolean, 
//   'Laptops': boolean, 
//   'Smart Watches': boolean,
//   [key: string]: boolean
// }

// interface IBooksSubCat {
//     masterCategory: boolean,
//     'Fiction': boolean, 
//     'Biography': boolean, 
//     'Thriller': boolean,
//     [key: string]: boolean
//   }