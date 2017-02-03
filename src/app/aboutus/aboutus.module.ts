import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared module
import { CommonSharedModule } from './../common_shared/common-shared.module';

// nested components 
import { CompanyDescComponent } from './aboutus_component/company-desc.component';
import { CompanyBriefComponent } from './aboutus_component/company-brief.component';
import { CompanyLeaderComponent } from './aboutus_component/company-leader.component';

import { AboutUsComponent } from './about-us-page.component';
import { about_us_routing } from './aboutus.routing';

@NgModule({
    imports: [CommonModule, RouterModule, about_us_routing, CommonSharedModule ],
    declarations: [ AboutUsComponent, CompanyDescComponent, CompanyBriefComponent,
    				CompanyLeaderComponent ],
    exports: [ AboutUsComponent, CompanyDescComponent, CompanyBriefComponent,  
               CompanyLeaderComponent]
})

export class AboutUsModule { }