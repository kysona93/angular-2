import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignInPageComponent } from './signin-page.component';

const signin_routes: Routes = [
    { path: '', component: SignInPageComponent}
];

export const signin_routing: ModuleWithProviders = RouterModule.forChild(signin_routes);