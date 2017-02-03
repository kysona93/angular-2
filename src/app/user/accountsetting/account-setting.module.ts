import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// shared module
import { CommonSharedModule } from './../../common_shared/common-shared.module';

// nested component
import { EmailSettingComponent } from './account_setting_component/email-setting.component';
import { PasswordSettingComponent } from './account_setting_component/password-setting.component';
import { UsernameSettingComponent } from './account_setting_component/username-setting.component';

import { UserAccountSettingComponent } from './account-setting-page.component';
import { user_account_setting_routing } from './account-setting.routing';

@NgModule({
    imports : [ CommonModule, RouterModule, FormsModule, CommonSharedModule, 
                ReactiveFormsModule, user_account_setting_routing ],
    declarations: [ UserAccountSettingComponent,EmailSettingComponent, PasswordSettingComponent, UsernameSettingComponent],
    exports: [ UserAccountSettingComponent,EmailSettingComponent, PasswordSettingComponent, UsernameSettingComponent]
})

export class UserAccountSettingModule { }