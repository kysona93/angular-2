import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// other components
import { AdminFooterComponent } from './admin-footer.component';
import { AdminMenuLeftComponent } from './admin-menu-left.component';

@NgModule({
    imports : [CommonModule, RouterModule],
    declarations: [AdminFooterComponent,AdminMenuLeftComponent],
    exports: [AdminFooterComponent,AdminMenuLeftComponent]
})

export class AdminSharedModule { }