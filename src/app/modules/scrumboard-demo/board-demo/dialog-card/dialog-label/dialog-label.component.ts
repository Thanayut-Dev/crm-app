import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrumboardDemoService } from '../../../scrumboard-demo.service';
import { Utils } from '../../../../../shared/utils/index';
import { takeUntil } from 'rxjs/operators';
import { Animations } from '../../../../../shared/animations/index';

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class DialogLabelComponent implements OnInit {

  @Input('card') card: any;

  @Output() cardLabelsChanged: EventEmitter<any>;

  board: any;
  labelsMenuView: string;
  selectedLabel: any;
  newLabel: any;
  toggleInArray: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private scrumboardDemoService: ScrumboardDemoService
  ) {
    // Set the defaults
    this.cardLabelsChanged = new EventEmitter();
    this.labelsMenuView = 'labels';
    this.newLabel = {
      'id': '',
      'name': '',
      'color': 'blue-400'
    };
    this.toggleInArray = Utils.toggleInArray;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.scrumboardDemoService.onBoardChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(board => {
        this.board = board;
      });
  }

  /* On destroy */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /* Card labels changed */
  onCardLabelsChanged(): void {
    this.cardLabelsChanged.next();
  }

  /* On label change */
  onLabelChange(): void {
    this.scrumboardDemoService.updateBoard();
  }

  /* Add new label */
  addNewLabel(): void {
    this.newLabel.id = Utils.generateGUID();
    this.board.labels.push(Object.assign({}, this.newLabel));
    this.newLabel.name = '';
    this.labelsMenuView = 'labels';
  }

}
