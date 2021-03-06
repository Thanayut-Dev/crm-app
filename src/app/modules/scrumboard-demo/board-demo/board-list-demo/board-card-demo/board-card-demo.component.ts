import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-board-card-demo',
  templateUrl: './board-card-demo.component.html',
  styleUrls: ['./board-card-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardCardDemoComponent implements OnInit {

  @Input() cardId;

  card: any;
  board: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.board = this.activatedRoute.snapshot.data.board;
    this.card = this.board.cards.filter((card) => {
      return this.cardId === card.id;
    })[0];
  }

  /* Is the card overdue? */
  isOverdue(cardDate): boolean {
    return moment() > moment(new Date(cardDate));
  }

}
