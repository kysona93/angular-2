import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared module 
import { CommonSharedModule } from './../../../common_shared/common-shared.module';

// nested component 
import { OrderDescComponent } from './cart_list_component/order-desc.component';
import { OrderListComponent } from './cart_list_component/order-list.component';

import { CartListComponent } from './cartlist.component';
import { cartlist_routing } from './cartlist.routing';

@NgModule({
    imports: [ CommonModule, RouterModule, CommonSharedModule, cartlist_routing ],
    declarations: [CartListComponent, OrderDescComponent, OrderListComponent],
    exports: [CartListComponent, OrderDescComponent, OrderListComponent]
})

export class CartListModule { }