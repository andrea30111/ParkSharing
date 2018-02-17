import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';
import { NavController, AlertController } from 'ionic-angular';

declare var jquery:any;
declare var $ :any;

import { User } from '../models/user.model';

import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  user: String;
  registerMessage: String;
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


  presentRegistration = function() {
    let prompt = this.alertCtrl.create({
      title: 'Registrazione',
      message: "Benvenuto! Effettua la registrazione per usufruire di tutti i servizi!",
      inputs: [
        {
          name: 'firstname',
          placeholder: 'Insert your firstname'
        },
        {
          name: 'lastname',
          placeholder: 'Insert your lastname'
        },
        {
          name: 'CF',
          placeholder: 'Insert your fiscal code'
        },
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
          text: 'Login',
          handler: data => {
           this.presentPrompt();
          }
        },
        {
          text: 'Register',
          handler: data => {
            const user = new User(
              data.email, 
              data.password, 
              data.firstname, 
              data.lastname, 
              data.CF, 
              null);
              this.authService.signup(user)
                  .subscribe(
                      data => {
                          console.log(data);
                          this.registerMessage = data.message;
                      },
                      error => {
                          console.error(error);
                          this.registerMessage = error.title;
                      }
                  );
          
          }
        }
      ]
    });
    prompt.present();
  }

  presentPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Bentornato! Effettua il login e inizia a parcheggiare!",
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
          text: 'Registrati',
          handler: data => {
            this.presentRegistration();
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

