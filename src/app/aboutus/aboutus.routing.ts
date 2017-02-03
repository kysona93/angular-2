import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutUsComponent } from './about-us-page.component';

const about_us_routes: Routes =[
    { path: '', component: AboutUsComponent }
];

export const about_us_routing: ModuleWithProviders = RouterModule.forChild(about_us_routes);