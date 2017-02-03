import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProductSubPageComponent } from './product-sub-page.component';

const product_sub_routes: Routes =[
    { path:'', component: ProductSubPageComponent }
];

export const product_sub_routing: ModuleWithProviders = RouterModule.forChild(product_sub_routes);