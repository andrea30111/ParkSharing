import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth.service';
//import { RegisterComponent } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  //  RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
//    IonicPageModule.forChild(RegisterComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
//    RegisterComponent
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
