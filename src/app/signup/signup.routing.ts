import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignUpPageComponent } from './signup-page.component';

const signup_routes: Routes =[
    { path:'', component: SignUpPageComponent }
];

export const signup_routing: ModuleWithProviders = RouterModule.forChild(signup_routes);