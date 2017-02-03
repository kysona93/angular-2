import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// nested component 
import { MerchantFooterComponent } from './merchant-footer.component';
import { MerchantMenuLeftComponent } from './merchant-menu-left.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [MerchantFooterComponent, MerchantMenuLeftComponent],
    exports: [MerchantFooterComponent, MerchantMenuLeftComponent]
})

export class MerchantDashboardSharedModule { }
