import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// shared module 
import { CommonSharedModule } from './../../common_shared/common-shared.module';
import { MerchantDashboardSharedModule } from './merchant_dashboard_shared/merchant-dashboard-shared.module';
// child module
import { MerchantHomeModule } from './merchant_home/merchant-home.module';
import { MerchantAccountSettingModule } from './accountsetting/account-setting.module';
import { ListProductModule } from './product/list_product/list-product.module';

import { MerchantDashboardPageComponent } from './merchant-dashboard-page.component';
import { merchant_dashboard_routing } from './merchant-dashboard.routing';

@NgModule({
    imports: [ CommonModule, RouterModule, MerchantHomeModule, MerchantAccountSettingModule,
               ListProductModule, CommonSharedModule, MerchantDashboardSharedModule, merchant_dashboard_routing],
    declarations: [ MerchantDashboardPageComponent],
    exports: [ MerchantDashboardPageComponent ]
})

export class MerchantDashboardModule { }