import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component"; //senza estensione
import { MessageListComponent } from "./messages/message-list.component"; //senza estensione
import { MessageInputComponent } from "./messages/message-input.component"; //senza estensione
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
    declarations: [ //qui aggiungo i nuovi component, ricorati l'import
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}
