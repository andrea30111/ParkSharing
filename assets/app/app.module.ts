import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component"; //senza estensione
import { MessageListComponent } from "./messages/message-list.component"; //senza estensione
import { MessageInputComponent } from "./messages/message-input.component"; //senza estensione



@NgModule({
    declarations: [ //qui aggiungo i nuovi component, ricorati l'import
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
