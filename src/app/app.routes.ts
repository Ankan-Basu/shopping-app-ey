import { Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CartPageComponent,
        title: 'Cart'
    },
    {
        path: 'cart',
        component: CartPageComponent,
        title: 'Cart'
    }
];
