import { Maps2Component } from './maps/maps2.component';
import { BackofficeComponent } from './auth/backoffice.component';
import { MapsComponent } from './maps/maps.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component"; //senza estensione
import { MessageListComponent } from "./messages/message-list.component"; //senza estensione
import { MessageInputComponent } from "./messages/message-input.component"; //senza estensione
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [ //qui aggiungo i nuovi component, ricorati l'import
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        MapsComponent,
        BackofficeComponent,
        Maps2Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAWOifJlodru0LZltRSNwTfMa0IbMyDJy4',
            libraries: ["places"]
          })
        ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
