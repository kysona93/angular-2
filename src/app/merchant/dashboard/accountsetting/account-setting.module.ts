import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// shared module
import { CommonSharedModule } from './../../../common_shared/common-shared.module';
// nested component
import { EmailSettingComponent } from './account_setting_component/email-setting.component';
import { PasswordSettingComponent } from './account_setting_component/password-setting.component';
import { UsernameSettingComponent } from './account_setting_component/username-setting.component';

import { MerchantAccountSettingComponent } from './account-setting-page.component';

@NgModule({
    imports : [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
                CommonSharedModule],
    declarations: [ MerchantAccountSettingComponent,EmailSettingComponent, PasswordSettingComponent, UsernameSettingComponent],
    exports: [ MerchantAccountSettingComponent,EmailSettingComponent, PasswordSettingComponent, UsernameSettingComponent]
})

export class MerchantAccountSettingModule { }