import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
// import { FuseConfirmDialogComponent } from '../confirm-dialog';
import { FuseConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        FuseConfirmDialogComponent
    ],
    imports: [
      SharedModule
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
})
export class FuseConfirmDialogModule
{
}
