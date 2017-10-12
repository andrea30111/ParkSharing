import { Component } from '@angular/core';

import { Message } from './message.module'

@Component({
    selector: 'app-message-list',
    template:`
        <div class="col-md-8 col-md-offset-2">
            <app-message
                [message]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent{
    messages: Message[] = [
      new Message('Some message','Max'),
      new Message('Cittar puzza','Aspy'),
      new Message('Andrea è figo','Cittar')
   ]
}
