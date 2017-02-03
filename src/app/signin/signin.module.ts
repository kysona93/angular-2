import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// shared moduel 
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested component 
import { SignInSocialNetworkComponent } from './signin_component/signin-socialnetwork.component';
import { SigninComponent } from './signin_component/signin.component';

import { SignInPageComponent } from './signin-page.component';
import { signin_routing } from './signin.routing';

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
              CommonSharedModule, signin_routing],
    declarations: [SignInPageComponent, SignInSocialNetworkComponent, SigninComponent],
    exports: [SignInPageComponent, SignInSocialNetworkComponent, SigninComponent]
})

export class SigninModule { }