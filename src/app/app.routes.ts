import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [

    {
        path: "home",
        component: ProductListComponent
    },

    {
        path: "cart",
        component: CartComponent
    },

    {
        path: "checkout",
        component: CheckoutComponent
    }

];
