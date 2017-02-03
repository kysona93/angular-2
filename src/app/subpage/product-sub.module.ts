import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// shared module 
import { CommonSharedModule } from './../common_shared/common-shared.module';
// nested component 
import { AdvertiseProductComponent } from './subpage_component/advertise-product.component';
import { MainMenuComponent } from './subpage_component/main-menu.component';
import { MenuLeftComponent } from './subpage_component/menu-left.component';
import { PaginationComponent } from './subpage_component/pagination.component';
import { ProductTitleComponent } from './subpage_component/product-title.component';
import { SearchComponent } from './subpage_component/search.component';

import { ProductSubPageComponent } from './product-sub-page.component';
import { product_sub_routing } from './product-sub.routing';

@NgModule({ 
    imports: [ CommonModule,RouterModule,FormsModule, CommonSharedModule, product_sub_routing],
    declarations: [ProductSubPageComponent,AdvertiseProductComponent,MainMenuComponent,
                  MenuLeftComponent,PaginationComponent,ProductTitleComponent,
                  SearchComponent],
    exports: [ProductSubPageComponent,AdvertiseProductComponent,MainMenuComponent,
                  MenuLeftComponent,PaginationComponent,ProductTitleComponent,
                  SearchComponent]
})

export class ProductSubModule { }