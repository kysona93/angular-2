import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import other component
import { MerchantRegisterMenuComponent } from './merchant-register-menu.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [MerchantRegisterMenuComponent],
    exports: [ MerchantRegisterMenuComponent]
})

export class MerchantRegisterSharedModule { }