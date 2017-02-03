import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from  '@angular/core';

// import children component
import { MerchantDescComponent } from './description/merchant-desc.component';
import { MerchantBusinessComponent } from './business/merchant-business.component';
import { MerchantRegisterComponent } from './register/merchant-register.component';
import { MerchantResourceComponent } from './resource/merchant-resource.component';
import { MerchantSignInComponent } from './signin/merchant-signin.component';
import { MerchantSolutionComponent } from './solution/merchant-solution.component';

import { MerchantRegDescComponent } from './merchant-reg-desc.component'; 

const merchant_reg_desc_routes: Routes =[
    { path:'', 
      component: MerchantRegDescComponent,
      children: [
           { path: '', component: MerchantDescComponent }, 
           { path: 'business', component: MerchantBusinessComponent }, 
           { path: 'merchant-register', component: MerchantRegisterComponent }, 
           { path: 'resource', component: MerchantResourceComponent }, 
           { path: 'merchant-signin', component: MerchantSignInComponent }, 
           { path: 'solution', component: MerchantSolutionComponent }, 
      ]
    }
];

export const merchant_reg_desc_routing: ModuleWithProviders = RouterModule.forChild(merchant_reg_desc_routes);