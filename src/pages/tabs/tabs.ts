import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = 'HomepagePage';
  tab6 = 'TutorialPage';
  tab3 = 'MapsComponent';
  tab4 = 'MyparkingComponent';
  tab5 = 'ExplorePage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}