import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminAccountSettingComponent } from './account-setting-page.component';

const admin_account_setting_routes: Routes = [
    { path: '', component: AdminAccountSettingComponent }
];

export const admin_account_setting_routing: ModuleWithProviders = RouterModule.forChild(admin_account_setting_routes);