import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HelpComponent } from './help.component';

const help_routes: Routes = [
    { path: '' ,component: HelpComponent }
];

export const help_routing: ModuleWithProviders = RouterModule.forChild(help_routes);