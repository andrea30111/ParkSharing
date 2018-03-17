import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage({
  segment: 'page-tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1 = 'HomepagePage';
  tab6 = 'TutorialPage';
  tab3 = 'MapsComponent';
  tab4 = 'MyparkingComponent';
  tab5 = 'ExplorePage';
  tab7 = 'UserareaPage';
  tab8 = 'MyreservationsPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}


