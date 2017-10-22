import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';

@Component({
    selector:'app-messages',
    template:`
        <app-message-input></app-message-input>
        <app-message-list></app-message-list>
    `
})

export class MessagesComponent{

}