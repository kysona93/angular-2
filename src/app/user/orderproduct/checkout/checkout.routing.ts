import { Routes , RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CheckoutComponent } from './checkout.component';

const checkout_routes: Routes=[
    { path:'', component: CheckoutComponent }
];

export const checkout_routing: ModuleWithProviders = RouterModule.forChild(checkout_routes);