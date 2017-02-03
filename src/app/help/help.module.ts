import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared module
import { CommonSharedModule } from './../common_shared/common-shared.module';

import { HelpComponent } from './help.component';
import { help_routing } from './help.routing';

@NgModule({
    imports: [CommonModule, RouterModule, CommonSharedModule, help_routing ],
    declarations: [HelpComponent],
    exports: [HelpComponent]
})

export class HelpModule { }