import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardComponent } from './scrumboard.component';
import { BoardComponent } from './board/board.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BoardResolve, ScrumboardService } from './scrumboard.service';
import { ListComponent } from './board/list/list.component';
import { ScrumboardBoardEditListNameComponent } from './board/list/edit-list-name/edit-list-name.component';
import { ScrumboardCardDialogComponent } from './board/dialogs/card/card.component';
import { ScrumboardBoardAddCardComponent } from './board/list/add-card/add-card.component';
import { ScrumboardBoardCardComponent } from './board/list/card/card.component';

import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { ScrumboardEditBoardNameComponent } from './board/edit-board-name/edit-board-name.component';
import { ScrumboardBoardSettingsSidenavComponent } from './board/sidenavs/settings/settings.component';
import { ScrumboardBoardAddListComponent } from './board/add-list/add-list.component';
import { ScrumboardLabelSelectorComponent } from './board/dialogs/card/label-selector/label-selector.component';
import { ScrumboardBoardColorSelectorComponent } from './board/sidenavs/settings/board-color-selector/board-color-selector.component';

const routes: Routes = [
  {
    path: 'boards',
    component: ScrumboardComponent,
    resolve: {
      scrumboard: ScrumboardService
    }
  },
  {
    path: 'boards/:boardId/:boardUri',
    component: BoardComponent,
    resolve: {
      board: BoardResolve
    }
  }
];

@NgModule({
  declarations: [
    ScrumboardComponent,
    BoardComponent,
    ListComponent,

    // ScrumboardBoardEditListNameComponent,
    // ScrumboardBoardCardComponent,
    // ScrumboardBoardAddCardComponent,
    // ScrumboardEditBoardNameComponent,
    // ScrumboardBoardSettingsSidenavComponent,
    // ScrumboardBoardAddListComponent,
    // ScrumboardBoardEditListNameComponent
    ScrumboardBoardCardComponent,
    ScrumboardBoardEditListNameComponent,
    ScrumboardBoardAddCardComponent,
    ScrumboardBoardAddListComponent,
    ScrumboardCardDialogComponent,
    ScrumboardLabelSelectorComponent,
    ScrumboardEditBoardNameComponent,
    ScrumboardBoardSettingsSidenavComponent,
    ScrumboardBoardColorSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

    NgxDnDModule
  ],
  providers: [
    ScrumboardService,
    BoardResolve
  ],
  entryComponents: [ScrumboardCardDialogComponent]
})
export class ScrumboardModule { }
