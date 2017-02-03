import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// shared module 
//import { CommonSharedModule } from './../../../common_shared/common-shared.module';
//import { MerchantRegisterSharedModule } from './../merchant_register_shared/merchant-shared.module';
// nested component 
import { MerchantBusinessFormComponent } from './business_component/merchant-bus-form.component';

import { MerchantBusinessComponent } from './merchant-business.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
    declarations: [MerchantBusinessComponent, MerchantBusinessFormComponent],
    exports: [MerchantBusinessComponent, MerchantBusinessFormComponent]
})

export class MerchantBusinessModule { }