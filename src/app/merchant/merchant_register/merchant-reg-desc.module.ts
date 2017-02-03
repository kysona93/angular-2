import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// shared module 
import { CommonSharedModule } from './../../common_shared/common-shared.module';
import { MerchantRegisterSharedModule } from './merchant_register_shared/merchant-shared.module';
// child module 
import { MerchantDescModule } from './description/merchant-desc.module';
import { MerchantBusinessModule } from './business/merchant-business.module';
import { MerchantRegisterModule } from './register/merchant-register.module';
import { MerchantResourceModule } from './resource/merchant-resource.module';
import { MerchantSolutionModule } from './solution/merchant-solution.module';
import { MerchantSigninModule } from './signin/merchant-signin.module';

import { MerchantRegDescComponent } from './merchant-reg-desc.component';
import { merchant_reg_desc_routing } from './merchant-reg-desc.routing';

@NgModule({
    imports: [CommonModule, RouterModule, CommonSharedModule, merchant_reg_desc_routing,  MerchantRegisterSharedModule,
              MerchantDescModule, MerchantBusinessModule, MerchantRegisterModule, 
              MerchantResourceModule, MerchantSolutionModule, MerchantSigninModule ],
    declarations: [MerchantRegDescComponent],
    exports: [MerchantRegDescComponent ]
})

export class MerchantRegisterDescModule { }