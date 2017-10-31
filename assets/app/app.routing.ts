import { BackofficeComponent } from './auth/backoffice.component';
import { MapsComponent } from './maps/maps.component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';

//il full è per evitare che ogni path scritto non vada sul null

const APP_ROUTES : Routes = [
    { path: '', redirectTo: '/messages', pathMatch:'full' },
    { path: 'messages', component: MessagesComponent},
    { path: 'backoffice', component: BackofficeComponent},
    { path: 'maps', component: MapsComponent},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

