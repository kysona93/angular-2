import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// share module 
import { CommonSharedModule } from './../../common_shared/common-shared.module';

import { ForgetPasswordComponent } from './forget-password-page.component';
import { forget_password_routing } from './forget-password.routing';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, 
              CommonSharedModule, forget_password_routing ],
    declarations: [ForgetPasswordComponent],
    exports: [ForgetPasswordComponent ]
})

export class ForgetPasswordModule { }