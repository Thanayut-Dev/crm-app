import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ContactChatContentService } from './contact-chat-content.service';

@Component({
  selector: 'app-contact-chat-content',
  templateUrl: './contact-chat-content.component.html',
  styleUrls: ['./contact-chat-content.component.scss']
})
export class ContactChatContentComponent implements OnInit {

  @ViewChild('drawer') drawer: MatSidenav;
  drawerContent: boolean = false;
  search = '';
  model: any;

  constructor(
    private router: Router,
    public contactChatService: ContactChatContentService,
  ) { }

  ngOnInit(): void {
    this.model = this.contactChatService.getUsersData();
    // console.log(this.model);
    // this.model = this.contactChatService.onDataChangedObservable$;
  }

  toggle(el) {
    this.drawerContent = el;
    // console.log(this.drawerContent);
    this.drawer.toggle();
  }

}
