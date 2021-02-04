import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../../chat/chat.service';

@Component({
  selector: 'app-contact-chats',
  templateUrl: './contact-chats.component.html',
  styleUrls: ['./contact-chats.component.scss']
})
export class ContactChatsComponent implements OnInit {

  @Input() model: any;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    console.log(this.model);
  }

}
