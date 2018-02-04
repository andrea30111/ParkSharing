import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'maps.html'
})
export class MapsComponent {
  address;
  map;

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public locations: LocationsProvider) {
 
  }
 
  ionViewDidLoad(){
 
    this.platform.ready().then(() => {
      
              this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
        
         });
 
  }
 
  getAddress(address){
    this.address = address;
    
    this.maps.getPlaceById(this.address.place_id).subscribe(
      data => {
        console.log(data);
        this.maps.centerMap(data.result.geometry.location);
        //TODO aggiungere ricerca parcheggi
      },
      error => {
        console.error(error);
      }
  );

  }

}
