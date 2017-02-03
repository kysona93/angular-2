import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonSharedModule } from './../../../common_shared/common-shared.module';

// nested child 
import { MerchantDescTitleComponent } from './desc_component/merchant-desc-title.component';
import { MerchantSampleComponent } from './desc_component/merchant-sample.component';

import { MerchantDescComponent } from './merchant-desc.component';

@NgModule({
    imports: [CommonModule, RouterModule, CommonSharedModule ],
    declarations: [ MerchantDescComponent, MerchantDescTitleComponent, MerchantSampleComponent],
    exports: [ MerchantDescComponent, MerchantDescTitleComponent, MerchantSampleComponent]
})

export class MerchantDescModule { }

