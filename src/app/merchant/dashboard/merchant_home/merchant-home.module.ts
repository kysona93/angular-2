import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// child component
import { MerchantInfoBoxComponent } from './home_component/merchant-info-box.component';
import { MerchantNotificationComponent } from './home_component/merchant-notification.component';
import { MerchantTableOrderComponent } from './home_component/merchant-tbl-order.component';
import { MerchantTableProfitComponent } from './home_component/merchant-tbl-profit.component';
import { MerchantTableSellerComponent } from './home_component/merchant-tbl-seller.component';

import { MerchantHomeComponent } from './merchant-home.component';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ MerchantHomeComponent, MerchantInfoBoxComponent, MerchantNotificationComponent, 
                    MerchantTableOrderComponent, MerchantTableProfitComponent, MerchantTableSellerComponent ],
    exports: [ MerchantHomeComponent, MerchantInfoBoxComponent, MerchantNotificationComponent, 
               MerchantTableOrderComponent, MerchantTableProfitComponent, MerchantTableSellerComponent ]
})

export class MerchantHomeModule { }
