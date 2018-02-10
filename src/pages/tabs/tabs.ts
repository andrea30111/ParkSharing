import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab2 = 'HomeComponent';
  tab3 = 'MapsComponent';
  tab4 = 'MyparkingComponent';
  tab5 = 'ExplorePage';
  tab6 = 'TutorialPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}