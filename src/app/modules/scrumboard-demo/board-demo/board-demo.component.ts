import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrumboardDemoService } from '../scrumboard-demo.service';
import { List } from '../list.model';
import { Location } from '@angular/common';
import { Animations } from '../../../shared/animations/index';

@Component({
  selector: 'app-board-demo',
  templateUrl: './board-demo.component.html',
  styleUrls: ['./board-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class BoardDemoComponent implements OnInit, OnDestroy {

  board: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private scrumboardDemoService: ScrumboardDemoService
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
        console.log(board);
        this.board = board;
      });
  }

  /* On list add */
  onListAdd(newListName): void {
    if (newListName === '') {
      return;
    }
    this.scrumboardDemoService.addList(new List({ name: newListName }));
  }

  /* On board name changed */
  onBoardNameChanged(newName): void {
    this.scrumboardDemoService.updateBoard();
    this.location.go('scrumboard/boards/' + this.board.id + '/' + this.board.uri);
  }

  /* On drop */
  onDrop(ev): void {
    this.scrumboardDemoService.updateBoard();
  }

}
