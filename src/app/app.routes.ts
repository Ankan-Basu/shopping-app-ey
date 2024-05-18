import { Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { OrderDetailsPageComponent } from './components/pages/order-details-page/order-details-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { AdminReviewsPageComponent } from './components/pages/admin-reviews-page/admin-reviews-page.component';
import { AdminOrdersPageComponent } from './components/pages/admin-orders-page/admin-orders-page.component';
import { AdminUsersPageComponent } from './components/pages/admin-users-page/admin-users-page.component';
import { AdminUsersDetailsPageComponent } from './components/pages/admin-users-details-page/admin-users-details-page.component';

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
    },
    {
        path: 'admin',
        component: AdminPageComponent,
        title: 'Admin',
        children: [
            {
                path: 'reviews',
                component: AdminReviewsPageComponent,
                title: 'Reviews'
            },
            {
                path: 'orders',
                component: AdminOrdersPageComponent,
                title: 'Orders'
            },
            {
                path: 'users',
                component: AdminUsersPageComponent,
                title: 'Users',
            },
            {
                path: 'users/:id',
                component: AdminUsersDetailsPageComponent,
                title: 'Users'
            }
        ]
    }
];
