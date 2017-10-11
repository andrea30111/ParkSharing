import { Component } from '@angular/core';
import { Message } from './messages/message.module'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
   message: Message = new Message('Some message','Max')
}
