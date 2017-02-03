import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// shared module 
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested components 
import { AdvertiseProductComponent } from './city_component/advertise-product.component';
import { MainMenuComponent } from './city_component/main-menu.component';
import { MenuLeftComponent } from './city_component/menu-left.component';
import { PaginationComponent } from './city_component/pagination.component';
import { ProductTitleComponent } from './city_component/product-title.component';
import { SearchComponent } from './city_component/search.component';
import { SimilarProductComponent } from './city_component/similar-product.component';

import { ProductCityPageComponent } from './product-city-page.component';
import { city_routing } from './city.routing';

@NgModule({
    imports : [CommonModule, RouterModule, FormsModule, city_routing, CommonSharedModule ],
    declarations: [ProductCityPageComponent, AdvertiseProductComponent, MainMenuComponent, MenuLeftComponent,
                   PaginationComponent, ProductTitleComponent, SearchComponent, 
                   SimilarProductComponent],
    exports: [ProductCityPageComponent, AdvertiseProductComponent, MainMenuComponent, MenuLeftComponent,
              PaginationComponent, ProductTitleComponent, SearchComponent, 
              SimilarProductComponent]
})

export class ProductCityModule { }