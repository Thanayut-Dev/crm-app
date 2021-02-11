import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-chat-info',
  templateUrl: './contact-chat-info.component.html',
  styleUrls: ['./contact-chat-info.component.scss']
})
export class ContactChatInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  node() {
    console.log("note");
    this.router.navigateByUrl('notes')
  }


}
