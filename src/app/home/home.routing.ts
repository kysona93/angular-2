import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomePageComponent } from './home-page.component';

const home_routes: Routes = [
    { path: 'home', component: HomePageComponent }
];

export const home_routing: ModuleWithProviders = RouterModule.forChild(home_routes);