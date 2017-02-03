import { NgModule } from '@angular/core';
import { CommonModule } from  '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// shared module 
// import { CommonSharedModule } from './../../../common_shared/common-shared.module';
// import { MerchantRegisterSharedModule } from './../merchant_register_shared/merchant-shared.module';
// nested component
import { MerchantRegisterFormComponent } from './register_component/merchant-reg-form.component';

import { MerchantRegisterComponent } from './merchant-register.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
    declarations: [MerchantRegisterComponent, MerchantRegisterFormComponent ],
    exports: [MerchantRegisterComponent, MerchantRegisterFormComponent ]
})
export class MerchantRegisterModule { }
