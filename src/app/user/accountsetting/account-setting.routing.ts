import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserAccountSettingComponent } from './account-setting-page.component';

const user_account_setting_routes: Routes = [
    { path: '', component: UserAccountSettingComponent }
];

export const user_account_setting_routing: ModuleWithProviders = RouterModule.forChild(user_account_setting_routes);