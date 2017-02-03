import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProductCityPageComponent } from './product-city-page.component';

const city_routes: Routes = [
    { path: '', component: ProductCityPageComponent }
];

export const city_routing: ModuleWithProviders = RouterModule.forChild(city_routes);