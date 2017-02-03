import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// shared module
import { CommonSharedModule } from './../common_shared/common-shared.module';
import { AdminSharedModule } from './admin_shared/admin-shared.module';

// child component 
import { AdminHomeComponent } from './admin_home/admin-home.component';

import { AdminPageComponent } from './admin-page.component';
import { admin_routing } from './admin.routing';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
              CommonSharedModule, AdminSharedModule, admin_routing ],
    declarations: [AdminPageComponent, AdminHomeComponent],
    exports: [AdminPageComponent, AdminHomeComponent]
})

export class AdminModule { }