import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //importandolo qui creo una singola istana usabile da tutti i component
    providers: [MessageService]
})
export class AppComponent {

}
