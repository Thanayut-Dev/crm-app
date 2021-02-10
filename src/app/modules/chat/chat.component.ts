import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() model;
  @ViewChild('drawer') drawer: MatSidenav;
  drawerContent: boolean = false;
  search = '';
  dataModel: any;

  constructor(
    public chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.chatService.onDataChangedObservable$);
    this.dataModel = this.chatService.getUsersData();
    // console.log(this.dataModel);


  }

  toggle(el) {
    this.drawerContent = el;
    // console.log(this.drawerContent);
    this.drawer.toggle();
  }

  node() {
    console.log("note");
    this.router.navigateByUrl('notes')
  }

}
