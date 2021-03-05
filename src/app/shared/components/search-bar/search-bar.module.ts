import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSearchBarComponent } from './search-bar.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
        FuseSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        // MatButtonModule,
        // MatIconModule
        SharedModule
    ],
    exports     : [
        FuseSearchBarComponent
    ]
})
export class FuseSearchBarModule
{
}
