import { BackofficeService } from './auth/backoffice.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from './messages/message.service';
import * as $ from 'jquery';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //importandolo qui creo una singola istana usabile da tutti i component
    providers: [MessageService, BackofficeService]
})



export class AppComponent implements OnInit{

    ngOnInit(){
    }

    ngAfterViewChecked() {
        $(".backoffice").addClass("ugo");
    }
    
}
