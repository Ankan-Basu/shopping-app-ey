// export interface IProductsFilter {
// }


export interface IProductsFilter {
    clothes: IClothSubCat,
    furnitures: IFurnituresSubCat,
    electronics: IElectronicsSubCat,
    books: IBooksSubCat,
    price: [number | undefined, number | undefined]
  }
  
  interface IClothSubCat {
    masterCategory: boolean,
    'Men\'s Wear': boolean, 
      'Women\'s Wear': boolean, 
      'Kid\'s Wear': boolean,
      [key: string]: boolean
  }
  
  interface IFurnituresSubCat {
    masterCategory: boolean,
      'Dining Tables': boolean, 
      'Chairs': boolean, 
      'Cupboards': boolean,
      [key: string]: boolean
  }
  
  interface IElectronicsSubCat {
    masterCategory: boolean,
    'Mobiles': boolean, 
    'Tablets': boolean, 
    'Laptops': boolean, 
    'Smart Watches': boolean,
    [key: string]: boolean
  }
  
  interface IBooksSubCat {
      masterCategory: boolean,
      'Fiction': boolean, 
      'Biography': boolean, 
      'Thriller': boolean,
      [key: string]: boolean
    }