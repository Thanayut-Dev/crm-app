import { Component, Input, OnInit } from '@angular/core';
import { ContactChatContentService } from '../contact-chat-content.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.scss']
})
export class ContactChatComponent implements OnInit {

   @Input() chatData: any;
  // chatData: any;

  constructor(
    public contactChatService: ContactChatContentService
  ) { }

  ngOnInit(): void {
    // this.contactChatService.getServerEventSource('http://localhost:3001/events')
    //   .subscribe((chat) => {
    //     // console.log(JSON.parse(chat.data));
    //     let data = JSON.parse(chat.data);
    //     this.chatData = data;
    //     console.log(this.chatData);
    //   });
  }

}
