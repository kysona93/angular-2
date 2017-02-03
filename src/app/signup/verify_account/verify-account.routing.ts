import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { VerifyAccountComponent } from './verify-account-page.component';

const verify_account_routes: Routes =[
    { path:'', component: VerifyAccountComponent }
];

export const verify_account_routing: ModuleWithProviders = RouterModule.forChild(verify_account_routes);