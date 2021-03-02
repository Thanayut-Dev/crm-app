import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
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

  message: String;
  qr: any = '/qrlogin/v1/qr/CHQR674f354b5a485a5974653245704d4b5f30393234623456424d6d53476c664332';
  chatData: any = [];

  body = [
    {
      "createby": "Theerasak Tubrit",
      "updateby": "Theerasak Tubrit",
      "_id": "60117256f8fdce329c904b0e",
      "contactName": "pet",
      "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      "contactCompany": "601171a8f8fdce329c904b0d",
      "contactPhoneNo": "099-77555558",
      "contactEmail": "test220@gmail.com",
      "contactLineId": "Pet_20",
      "contactAddress": "467/4",
      "contactChats": [],
      "created": "2021-01-27T14:01:58.152Z",
      "__v": 0,
      "id": "60117256f8fdce329c904b0e",
      "updated": "2021-01-27T14:04:53.059Z",
      "layout": "chats"
    }
  ]

  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    public contactChatService: ContactChatContentService,
  ) { }

  ngOnInit(): void {

    this.contactChatService.getServerEventSource('http://localhost:3001/events')
      .subscribe((chat) => {
        // console.log(JSON.parse(chat.data));
        let data = JSON.parse(chat.data);

        if (data.length > 0) {
          data.forEach(chatF => {
            this.body[0].contactChats.push(chatF);
          })
          this.chatData = this.body[0].contactChats;
        } else {
          this.chatData.push(data);
        }
      });

    this.contactChatService.getContactListData().then((res: any) => {
      console.log(res.data);
      this.model = res.data;
    })
  }

  async sendMessage() {
    let body = {
      messaging_type: "RESPONSE",
      recipient: {
        id: "3901624803208891"
      },
      message: {
        text: this.message
      }
    }
    this.contactChatService.createData(body).then(res => {
      this.message = '';
    })

  }

  toggle(el) {
    this.drawerContent = el;
    this.drawer.toggle();
  }

}
