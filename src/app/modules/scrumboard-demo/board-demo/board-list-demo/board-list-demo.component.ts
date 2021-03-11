import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { FusePerfectScrollbarDirective } from 'src/app/shared/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { ScrumboardDemoService } from '../../scrumboard-demo.service';
import { Card } from '../../card.model';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-board-list-demo',
  templateUrl: './board-list-demo.component.html',
  styleUrls: ['./board-list-demo.component.scss']
})
export class BoardListDemoComponent implements OnInit {

  @Input() list;
  @ViewChild(FusePerfectScrollbarDirective) listScroll: FusePerfectScrollbarDirective;

  board: any;
  dialogRef: any;


  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private scrumboardDemoService: ScrumboardDemoService,
    private matDialog: MatDialog
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.scrumboardDemoService.onBoardChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(board => {
        this.board = board;
      });
  }

  /* On list name changed */
  onListNameChanged(newListName): void {
    this.list.name = newListName;
  }

  /* On card added */
  onCardAdd(newCardName): void {
    if (newCardName === '') {
      return;
    }

    this.scrumboardDemoService.addCard(this.list.id, new Card({ name: newCardName }));

    setTimeout(() => {
      this.listScroll.scrollToBottom(0, 400);
    });
  }

  /* Remove list */
  removeList(listId): void {
    this.confirmDialogRef = this.matDialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.scrumboardDemoService.removeList(listId);
      }
    });
  }

  /* Open card dialog */
  openCardDialog(cardId): void {
    this.dialogRef = this.matDialog.open(DialogCardComponent, {
      panelClass: 'app-dialog-card',
      data: {
        cardId: cardId,
        listId: this.list.id
      }
    });
    this.dialogRef.afterClosed()
      .subscribe(response => {

      });
  }

  /* On drop */
  onDrop(ev): void {
    this.scrumboardDemoService.updateBoard();
  }

}
