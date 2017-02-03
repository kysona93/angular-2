import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import other components
import { NavigationComponent } from './navigation.component';
import { FooterWebComponent } from './footer-web.component';
import { CityComponent } from './city.component';
import { CompanyInfoComponent } from './company-info.component';

@NgModule({
    imports: [CommonModule,RouterModule],
    declarations: [NavigationComponent,FooterWebComponent,CityComponent,CompanyInfoComponent],
    exports: [NavigationComponent,FooterWebComponent,CityComponent,CompanyInfoComponent]
})

export class CommonSharedModule { }

