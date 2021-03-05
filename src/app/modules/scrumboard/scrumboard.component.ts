import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { Animations } from '../../shared/animations/index';
import { Router } from '@angular/router';
import { ScrumboardService } from './scrumboard.service';
import { takeUntil } from 'rxjs/operators';
import { Board } from './board.model';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class ScrumboardComponent implements OnInit, OnDestroy {

  boards: any[];
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _router: Router,
    private _scrumboardService: ScrumboardService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this._scrumboardService.onBoardsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(boards => {
        this.boards = boards;
      });
  }

  /* New board
  */
  newBoard(): void {
    const newBoard = new Board({});
    this._scrumboardService.createNewBoard(newBoard).then(() => {
      this._router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
    });
  }

}
