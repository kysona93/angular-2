import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProductDetailPageComponent } from './product-detail-page.component';

const product_detail_routes: Routes =[
    { path: '', component: ProductDetailPageComponent}
];

export const product_detail_routing: ModuleWithProviders = RouterModule.forChild(product_detail_routes);