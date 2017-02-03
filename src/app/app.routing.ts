import { Routes, RouterModule } from '@angular/router';

// default component 
import { HomePageComponent } from './home/home-page.component';

export const routes: Routes =[
    // sign in 
    { path: 'signin', loadChildren: './signin/signin.module#SigninModule'},
    { path: 'forget-password', loadChildren: './signin/forget_password/forget-password.module#ForgetPasswordModule'},
    // sign up 
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    { path: 'signup/verify-account', loadChildren: './signup/verify_account/verify-account.module#VerifyAccountModule'},
    // about us
    { path: 'about-us', loadChildren: './aboutus/aboutus.module#AboutUsModule'},
    // help 
    { path: 'help', loadChildren: './help/help.module#HelpModule'},
    // product sub page
    { path: 'products', loadChildren: './subpage/product-sub.module#ProductSubModule'},
    // product detail page
    { path: 'products/product', loadChildren: './product_detail/product-detail.module#ProductDetailModule'},
    // products by city
    { path: 'city/products', loadChildren: './city/city.module#ProductCityModule'},
    // user 
    { path: 'user/account-setting', loadChildren: './user/accountsetting/account-setting.module#UserAccountSettingModule'},
    { path: 'user/cart-list', loadChildren: './user/orderproduct/cart_list/cart_list.module#CartListModule'},
    { path: 'user/checkout', loadChildren: './user/orderproduct/checkout/checkout.module#CheckoutModule'},
    // merchant
    { path: 'merchant/register', loadChildren: './merchant/merchant_register/merchant-reg-desc.module#MerchantRegisterDescModule'},
    { path: 'merchant/dashboard', loadChildren: './merchant/dashboard/merchant-dashboard.module#MerchantDashboardModule'},
    // admin
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    // home page
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent }
    //{ path: '**', component: HomePageComponent } // anonymous url
];

