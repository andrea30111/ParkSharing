import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'myheader',
  templateUrl: 'header.html',
})
export class HeaderComponent {

  user: String;
  registerMessage: String;

  constructor(private authService: AuthService ,private alertCtrl: AlertController, private navCtrl: NavController) {
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
              data.CF);
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
  
  goToUserArea(){
    this.navCtrl.push('UserareaComponent');
  }


}
