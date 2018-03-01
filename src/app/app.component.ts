import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    
    storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = "TabsPage";
        } else {
          this.rootPage = "TutorialPage";
        }
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });
      });

  }
  
}

