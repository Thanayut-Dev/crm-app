import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ChatService } from './chat.service';
import { LeftFormModule } from '../left-form/left-form.module';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    resolve: [ChatService]
  }
]

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
    LeftFormModule
  ],
  exports:[ChatComponent]
})
export class ChatModule { }
