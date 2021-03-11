import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Utils } from '../../../../shared/utils/index';
import { ScrumboardDemoService } from '../../scrumboard-demo.service';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogCardComponent implements OnInit, OnDestroy {

  card: any;
  board: any;
  list: any;

  toggleInArray = Utils.toggleInArray;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  @ViewChild('checklistMenuTrigger') checklistMenu: MatMenuTrigger;

  @ViewChild('newCheckListTitleField') newCheckListTitleField;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    public matDialogRef: MatDialogRef<DialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private matDialog: MatDialog,
    private scrumboardDemoService: ScrumboardDemoService
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.scrumboardDemoService.onBoardChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(board => {
        this.board = board;

        this.card = this.board.cards.find((_card) => {
          return this._data.cardId === _card.id;
        });

        this.list = this.board.lists.find((_list) => {
          return this._data.listId === _list.id;
        });
      });
  }

  /* On destroy */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /* Remove due date */
  removeDueDate(): void {
    this.card.due = '';
    this.updateCard();
  }

  /* Toggle subscribe */
  toggleSubscribe(): void {
    this.card.subscribed = !this.card.subscribed;

    this.updateCard();
  }

  /* Toggle cover image */
  toggleCoverImage(attachmentId): void {
    if (this.card.idAttachmentCover === attachmentId) {
      this.card.idAttachmentCover = '';
    }
    else {
      this.card.idAttachmentCover = attachmentId;
    }

    this.updateCard();
  }

  /* Remove attachment */
  removeAttachment(attachment): void {
    if (attachment.id === this.card.idAttachmentCover) {
      this.card.idAttachmentCover = '';
    }

    this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);

    this.updateCard();
  }

  /* Remove checklist */
  removeChecklist(checklist): void {
    this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);

    this.updateCard();
  }
  /* Update checked count */
  updateCheckedCount(list): void {
    const checkItems = list.checkItems;
    let checkedItems = 0;
    let allCheckedItems = 0;
    let allCheckItems = 0;

    for (const checkItem of checkItems) {
      if (checkItem.checked) {
        checkedItems++;
      }
    }

    list.checkItemsChecked = checkedItems;

    for (const item of this.card.checklists) {
      allCheckItems += item.checkItems.length;
      allCheckedItems += item.checkItemsChecked;
    }

    this.card.checkItems = allCheckItems;
    this.card.checkItemsChecked = allCheckedItems;

    this.updateCard();
  }

  /* Remove checklist item */
  removeChecklistItem(checkItem, checklist): void {
    checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);

    this.updateCheckedCount(checklist);

    this.updateCard();
  }

  /* Add check item */
  addCheckItem(form: NgForm, checkList): void {
    const checkItemVal = form.value.checkItem;

    if (!checkItemVal || checkItemVal === '') {
      return;
    }

    const newCheckItem = {
      'name': checkItemVal,
      'checked': false
    };

    checkList.checkItems.push(newCheckItem);

    this.updateCheckedCount(checkList);

    form.setValue({ checkItem: '' });

    this.updateCard();
  }

  /* Add checklist */
  addChecklist(form: NgForm): void {
    this.card.checklists.push({
      id: Utils.generateGUID(),
      name: form.value.checklistTitle,
      checkItemsChecked: 0,
      checkItems: []
    });

    form.setValue({ checklistTitle: '' });
    form.resetForm();
    this.checklistMenu.closeMenu();
    this.updateCard();
  }

  /* On checklist menu open */
  onChecklistMenuOpen(): void {
    setTimeout(() => {
      this.newCheckListTitleField.nativeElement.focus();
    });
  }

  /* Add new comment */
  addNewComment(form: NgForm): void {
    const newCommentText = form.value.newComment;

    const newComment = {
      idMember: '36027j1930450d8bf7b10158',
      message: newCommentText,
      time: 'now'
    };

    this.card.comments.unshift(newComment);

    form.setValue({ newComment: '' });

    this.updateCard();
  }

  /* Remove card */
  removeCard(): void {
    this.confirmDialogRef = this.matDialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the card?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.matDialogRef.close();
        this.scrumboardDemoService.removeCard(this.card.id, this.list.id);
      }
    });
  }

  /* Update card */
  updateCard(): void {
    this.scrumboardDemoService.updateCard(this.card);
  }
}
