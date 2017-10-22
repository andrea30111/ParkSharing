import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';

//il full è per evitare che ogni path scritto non vada sul null

const APP_ROUTES : Routes = [
    { path: '', redirectTo: '/messages', pathMatch:'full' },
    { path: 'messages', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

