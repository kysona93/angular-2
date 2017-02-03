import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CartListComponent } from './cartlist.component';

const cartlist_routes: Routes=[
    { path:'',component: CartListComponent }
];

export const cartlist_routing: ModuleWithProviders = RouterModule.forChild(cartlist_routes);