import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Board } from './board.model';
import { ScrumboardDemoService } from './scrumboard-demo.service';
import { Animations } from '../../shared/animations/index';

@Component({
  selector: 'app-scrumboard-demo',
  templateUrl: './scrumboard-demo.component.html',
  styleUrls: ['./scrumboard-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class ScrumboardDemoComponent implements OnInit, OnDestroy {

  boards: any[];
  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private scrumboardDemoService: ScrumboardDemoService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.scrumboardDemoService.onBoardsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(boards => {
        this.boards = boards;
      });
  }

  /* New board
  */
  newBoard(): void {
    const newBoard = new Board({});
    this.scrumboardDemoService.createNewBoard(newBoard).then(() => {
      this.router.navigate(['/scrumboard-demo/' + newBoard.id + '/' + newBoard.uri]);
    });
  }

}
