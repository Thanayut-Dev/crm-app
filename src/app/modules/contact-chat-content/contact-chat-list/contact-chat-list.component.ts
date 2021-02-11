import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-chat-list',
  templateUrl: './contact-chat-list.component.html',
  styleUrls: ['./contact-chat-list.component.scss']
})
export class ContactChatListComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.model);
  }

}
