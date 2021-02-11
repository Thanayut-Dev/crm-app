import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactChatContentComponent } from './contact-chat-content.component';
import { ContactChatComponent } from './contact-chat/contact-chat.component';
import { ContactChatListComponent } from './contact-chat-list/contact-chat-list.component';
import { ContactChatInfoComponent } from './contact-chat-info/contact-chat-info.component';
import { ContactChatContentService } from './contact-chat-content.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ContactChatContentComponent,
    resolve: [ContactChatContentService]
  }
]

@NgModule({
  declarations: [ContactChatContentComponent, ContactChatComponent, ContactChatListComponent, ContactChatInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class ContactChatContentModule { }
