import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// shared module 
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested component 
import { AdvertiseProductComponent } from './home_component/advertise-product.component';
import { BigAdvertiseComponent } from './home_component/big-advertise.component';
import { MainMenuComponent } from './home_component/main-menu.component';
import { SearchComponent } from './home_component/search.component';
import { SliderComponent } from './home_component/slider.component';
import { SmallAdvertiseComponent } from './home_component/small-advertise.component';

import { HomePageComponent } from './home-page.component';
import { home_routing } from './home.routing';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, CommonSharedModule, home_routing],
    declarations: [ HomePageComponent, AdvertiseProductComponent, BigAdvertiseComponent,
                  MainMenuComponent, SearchComponent, SliderComponent, SmallAdvertiseComponent],
    exports: [ HomePageComponent, AdvertiseProductComponent, BigAdvertiseComponent,
               MainMenuComponent, SearchComponent, SliderComponent, SmallAdvertiseComponent]
})
export class HomeModule { }