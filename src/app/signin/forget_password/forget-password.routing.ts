import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ForgetPasswordComponent } from './forget-password-page.component';

const forget_password_routes : Routes =[
    { path: '', component: ForgetPasswordComponent }
];

export const forget_password_routing: ModuleWithProviders = RouterModule.forChild(forget_password_routes);