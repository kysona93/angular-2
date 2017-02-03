import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// shared module
import { AdminSharedModule } from './../admin_shared/admin-shared.module';

// nested component
import { EmailSettingComponent } from './account_setting_component/email-setting.component';
import { PasswordSettingComponent } from './account_setting_component/password-setting.component';
import { UsernameSettingComponent } from './account_setting_component/username-setting.component';

import { AdminAccountSettingComponent } from './account-setting-page.component';
import { admin_account_setting_routing } from './account-setting.routing';

@NgModule({
    imports : [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule, 
                AdminSharedModule, admin_account_setting_routing ],
    declarations: [ AdminAccountSettingComponent,EmailSettingComponent, 
    			    PasswordSettingComponent, UsernameSettingComponent],
    exports: [ AdminAccountSettingComponent,EmailSettingComponent, 
    		   PasswordSettingComponent, UsernameSettingComponent]
})

export class AdminAccountSettingModule { }