import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = 'LoginComponent';
  tab2 = 'RegisterComponent';
  tab3 = 'MapsComponent';
  tab4 = 'ExplorePage';
  tab5 = 'TutorialPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}