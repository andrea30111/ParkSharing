import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { ParkingService } from '../../providers/parking.service';
import { Parking } from '../../models/parking.model';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'maps.html'
})
export class MapsComponent {
  address;
  map;
  parks = [];

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public parkingService: ParkingService, public platform: Platform, public locations: LocationsProvider) {
 
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
        this.maps.centerMap(data.result.geometry.location);
        this.parkingService.getParkingsByAddress(this.maps.map.getBounds()).subscribe(
          (parkings: Parking[]) => {
              for (let parking of parkings) {
                this.maps.addMarker(parking.latitude, parking.longitude, parking._id);
                this.parks.push(parking);
              }
          },
          error => {
            console.error(error);
          }
        );
      },
      error => {
        console.error(error);
      }
  );

  }

}
