import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// shared module 
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested component
import { AdvertiseProductComponent } from './product_detail_component/advertise-product.component';
import { GoogleMapComponent } from './product_detail_component/google-map.component';
import { MainMenuComponent } from './product_detail_component/main-menu.component';
import { ProductDescComponent } from './product_detail_component/product-desc.component';
import { ProductPictureComponent } from './product_detail_component/product-picture.component';
import { ProductTitleComponent } from './product_detail_component/product-title.component';
import { SearchComponent } from './product_detail_component/search.component';

import { ProductDetailPageComponent } from './product-detail-page.component';
import { product_detail_routing } from './product-detail.routing';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, CommonSharedModule, product_detail_routing],
    declarations: [ ProductDetailPageComponent, AdvertiseProductComponent, GoogleMapComponent,
                    MainMenuComponent, ProductDescComponent, ProductPictureComponent, 
                    ProductTitleComponent, SearchComponent ],
    exports: [ ProductDetailPageComponent, AdvertiseProductComponent, GoogleMapComponent,
                    MainMenuComponent, ProductDescComponent, ProductPictureComponent, 
                    ProductTitleComponent, SearchComponent ]
})

export class ProductDetailModule { }