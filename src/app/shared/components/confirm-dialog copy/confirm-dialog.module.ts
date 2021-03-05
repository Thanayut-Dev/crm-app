import { NgModule } from '@angular/core';
// import { MatButtonModule, MatDialogModule } from '@angular/material';

// import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FuseConfirmDialogComponent } from './confirm-dialog.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
        FuseConfirmDialogComponent
    ],
    imports: [
        // MatDialogModule,
        // MatButtonModule
        SharedModule
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
})
export class FuseConfirmDialogModule
{
}
