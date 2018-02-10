import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';
import { NavController, AlertController } from 'ionic-angular';

import { User } from '../models/user.model';

import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  user: String;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService ,private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLogout(){
    this.authService.logout();
    this.user = null;
  }

  isLoggedIn(){
    if(this.authService.isLoggedIn()){
      this.user = this.authService.user;
      return true;
    }
  }

  presentPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'email',
          placeholder: 'Insert your email'
        },
        {
          name: 'password',
          placeholder: 'Insert your password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log(data);
              const user = new User(
                  data.email,
                  data.password 
              );
              this.authService.signin(user)
                  .subscribe(
                      data => {
                          localStorage.setItem('token',data.token);
                          localStorage.setItem('userId',data.userId);
                          this.user = data.userName + " " + data.userSurname;
                          localStorage.setItem('userName', data.userName + " " + data.userSurname);
                          //non gestire la navigazione con angular ma con ionic
                          //this.router.navigateByUrl('/');                  
                      },
                      error => {
                          //this.errorMessage = error.error.message;
                          //console.error(error);
                      }
                  );
          
          }
        }
      ]
    });
    prompt.present();
  }
}

