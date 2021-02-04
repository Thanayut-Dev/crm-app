import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() model;
  @ViewChild('drawer') drawer: MatSidenav;
  drawerContent:boolean = false;
  search = '';

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    // console.log(this.chatService.onDataChangedObservable$);
  }

  toggle(el) {
    this.drawerContent = el;
    // console.log(this.drawerContent);
    this.drawer.toggle();
  }

}
