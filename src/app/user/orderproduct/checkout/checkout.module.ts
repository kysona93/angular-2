import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// shared module
import { CommonSharedModule } from './../../../common_shared/common-shared.module';

// nested component
import { CheckoutCardComponent } from './checkout_component/checkout-card.component';
import { CheckoutDescComponent } from './checkout_component/checkout-desc.component';
import { CheckoutSummaryComponent } from './checkout_component/checkout-summary.component';

import { CheckoutComponent } from './checkout.component';
import { checkout_routing } from './checkout.routing';

@NgModule({
    imports: [ CommonModule, RouterModule, CommonSharedModule,
               FormsModule, ReactiveFormsModule, checkout_routing],
    declarations: [CheckoutComponent, CheckoutCardComponent, CheckoutDescComponent, CheckoutSummaryComponent ],
    exports: [CheckoutComponent, CheckoutCardComponent, CheckoutDescComponent, CheckoutSummaryComponent ]
})

export class CheckoutModule { }