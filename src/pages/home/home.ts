import { AuthService } from '../../providers/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomeComponent{

  user: String;
  
  constructor(public navCtrl: NavController, private authService: AuthService) {

  }

  ngOnInit(){
 
  }

  onLogout(){
    this.authService.logout();
    this.user = null;
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
