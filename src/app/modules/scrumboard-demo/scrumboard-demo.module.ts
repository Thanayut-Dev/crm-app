import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardDemoComponent } from './scrumboard-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { BoardResolve, ScrumboardDemoService } from './scrumboard-demo.service';
import { BoardDemoComponent } from './board-demo/board-demo.component';
import { BoardEditNameComponent } from './board-demo/board-edit-name/board-edit-name.component';
import { BoardAddListComponent } from './board-demo/board-add-list/board-add-list.component';
import { BoardListDemoComponent } from './board-demo/board-list-demo/board-list-demo.component';
import { BoardListEditNameComponent } from './board-demo/board-list-demo/board-list-edit-name/board-list-edit-name.component';
import { BoardCardDemoComponent } from './board-demo/board-list-demo/board-card-demo/board-card-demo.component';
import { BoardAddCardDemoComponent } from './board-demo/board-list-demo/board-add-card-demo/board-add-card-demo.component';
import { DialogCardComponent } from './board-demo/dialog-card/dialog-card.component';
import { DialogLabelComponent } from './board-demo/dialog-card/dialog-label/dialog-label.component';
import { FuseMaterialColorPickerModule } from '../../shared/components/material-color-picker/material-color-picker.module';

const routes: Routes = [
  {
    path: '',
    component: ScrumboardDemoComponent,
    resolve: {
      scrumboard: ScrumboardDemoService
    }
  },
  {
    path: ':boardId/:boardUri',
    component: BoardDemoComponent,
    resolve: {
      board: BoardResolve
    }
  }
];

@NgModule({
  declarations: [ScrumboardDemoComponent, BoardDemoComponent, BoardEditNameComponent, BoardAddListComponent, BoardListDemoComponent, BoardListEditNameComponent, BoardCardDemoComponent, BoardAddCardDemoComponent, DialogCardComponent, DialogLabelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

    FuseMaterialColorPickerModule,

    NgxDnDModule
  ],
  providers: [
    ScrumboardDemoService,
    BoardResolve
  ],
})
export class ScrumboardDemoModule { }
