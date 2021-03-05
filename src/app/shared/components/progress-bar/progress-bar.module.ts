import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { FuseProgressBarComponent } from './progress-bar.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
        FuseProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        // MatButtonModule,
        // MatIconModule,
        // MatProgressBarModule
        SharedModule
    ],
    exports     : [
        FuseProgressBarComponent
    ]
})
export class FuseProgressBarModule
{
}
