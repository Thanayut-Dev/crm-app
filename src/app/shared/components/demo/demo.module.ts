import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

// import { MatDividerModule, MatListModule } from '@angular/material';

import { FuseDemoContentComponent } from './demo-content/demo-content.component';
import { FuseDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        // MatDividerModule,
        // MatListModule
        SharedModule
    ],
    exports     : [
        FuseDemoContentComponent,
        FuseDemoSidebarComponent
    ]
})
export class FuseDemoModule
{
}
