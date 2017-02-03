import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// shared module 
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested component 
import { SignUpSocialNetworkComponent } from './signup_component/signup-social.component';
import { SignUpComponent } from './signup_component/signup.component';

import { SignUpPageComponent } from './signup-page.component';
import { signup_routing } from './signup.routing';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
              CommonSharedModule, signup_routing ],
    declarations: [SignUpPageComponent,SignUpSocialNetworkComponent,SignUpComponent ],
    exports: [SignUpPageComponent,SignUpSocialNetworkComponent,SignUpComponent ]
})

export class SignupModule { }