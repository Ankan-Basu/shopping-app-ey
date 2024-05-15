import { Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { OrderDetailsComponent } from './components/base-components/order-details/order-details.component';
import { OrderDetailsPageComponent } from './components/pages/order-details-page/order-details-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'products',
        component: ProductsPageComponent,
        title: 'Products'
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        title: 'Profile'
    },
    {
        path: 'orders/:id',
        component: OrderDetailsPageComponent,
        title: 'Orders'
    },
    {
        path: 'cart',
        component: CartPageComponent,
        title: 'Cart'
    },
    {
        path: 'orders',
        component: OrdersPageComponent,
        title: 'Orders'
    },
    {
        path: 'product/:id',
        component: ProductDetailsPageComponent,
        title: ''
    }
];
