import { AuthService } from '../../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

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
