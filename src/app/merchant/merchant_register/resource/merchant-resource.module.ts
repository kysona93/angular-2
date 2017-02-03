import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// shared module 
// import { CommonSharedModule } from './../../../common_shared/common-shared.module';
// import { MerchantRegisterSharedModule } from './../merchant_register_shared/merchant-shared.module';
// nested component 
import { MerchantRegDescComponent } from './resource_component/merchant-reg-desc.component';
import { MerchantSoluDescComponent } from './resource_component/merchant-solu-des.component';

import { MerchantResourceComponent } from './merchant-resource.component';

@NgModule({
    imports: [CommonModule, RouterModule ],
    declarations: [MerchantResourceComponent,MerchantRegDescComponent,MerchantSoluDescComponent],
    exports: [MerchantResourceComponent,MerchantRegDescComponent,MerchantSoluDescComponent]
})

export class MerchantResourceModule { }