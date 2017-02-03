import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import child routes
import { MerchantHomeComponent } from './merchant_home/merchant-home.component';
import { MerchantAccountSettingComponent } from './accountsetting/account-setting-page.component';
import { ListProductComponent } from './product/list_product/list-product.component';

import { MerchantDashboardPageComponent } from './merchant-dashboard-page.component';

const merchant_dashboard_routes: Routes = [
    { path: '', 
      component: MerchantDashboardPageComponent,
      children: [
        { path: '', component: MerchantHomeComponent },
        { path: 'mer-acc-setting', component: MerchantAccountSettingComponent },
        { path: 'list-product', component: ListProductComponent }
      ] 
    }
];

export const merchant_dashboard_routing: ModuleWithProviders = RouterModule.forChild(merchant_dashboard_routes);