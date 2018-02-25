import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { AuthService } from '../providers/auth.service';
import { LocationsProvider } from '../providers/locations/locations';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ParkingService } from '../providers/parking.service';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { UserService } from '../providers/user.service';

@NgModule({
  declarations: [
    MyApp,
    //TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp)
//    IonicPageModule.forChild(RegisterComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //TabsPage
  ],
  providers: [
    StatusBar,
    AuthService,
    ParkingService,
    Network,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsProvider,
    ConnectivityProvider,
    GoogleMapsProvider,
    UserService
  ]
})
export class AppModule {}
