import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// shared module 
//import { CommonSharedModule } from './../../../common_shared/common-shared.module';

import { MerchantSignInComponent } from './merchant-signin.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
    declarations: [MerchantSignInComponent],
    exports: [MerchantSignInComponent]
})

export class MerchantSigninModule { }

