import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared module 
import { CommonSharedModule } from './../../common_shared/common-shared.module';

import { VerifyAccountComponent } from './verify-account-page.component';
import { verify_account_routing } from './verify-account.routing';

@NgModule({
    imports: [CommonModule, RouterModule, CommonSharedModule, verify_account_routing],
    declarations: [VerifyAccountComponent],
    exports: [VerifyAccountComponent]
})

export class VerifyAccountModule { }