import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// shared module 
import { CommonSharedModule } from './../../../../common_shared/common-shared.module';
import { MerchantDashboardSharedModule } from './../../merchant_dashboard_shared/merchant-dashboard-shared.module';
// nested component 
import { TableListProductComponent } from './list_product_component/tbl-list-product.component';

import { ListProductComponent } from './list-product.component';

@NgModule({
    imports: [CommonModule, RouterModule, CommonSharedModule, MerchantDashboardSharedModule ],
    declarations: [ListProductComponent,TableListProductComponent],
    exports: [ListProductComponent,TableListProductComponent]
})

export class ListProductModule { }