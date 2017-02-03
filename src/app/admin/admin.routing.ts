import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// child component 
import { AdminHomeComponent } from './admin_home/admin-home.component';

import { AdminPageComponent } from './admin-page.component';

const admin_routes : Routes =[
    { path: '', 
      component: AdminPageComponent,
      children: [
          { path: '', component: AdminHomeComponent },
          { path: 'admin/account-setting', loadChildren: './accountsetting/account-setting.module#AdminAccountSettingModule' }
      ]
    }  
];

export const admin_routing: ModuleWithProviders = RouterModule.forChild(admin_routes);