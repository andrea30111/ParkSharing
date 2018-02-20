import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { ParkingService } from '../../providers/parking.service';
import { Parking } from '../../models/parking.model';

declare var $ :any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'maps.html'
})
export class MapsComponent {
  address;
  map;
  parks;

   bookedPark ={
    date: this.calculateTime(''),
    hoursFrom: this.calculateTime('+1'),
    hoursTo: this.calculateTime('+3'),
    targa:''
  }

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public parkingService: ParkingService, public platform: Platform, public locations: LocationsProvider) {
    //this.time = this.calculateTime();
  }

  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();

    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));

    return nd.toISOString();
  }
  
 
  ionViewDidLoad(){
 
    this.platform.ready().then(() => {
              this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
         });
  }
 
  getAddress(address){
    this.address = address;
    this.parks = [];
    
    this.maps.getPlaceById(this.address.place_id).subscribe(
      data => {
        this.maps.centerMap(data.result.geometry.location);
        this.parkingService.getParkingsByAddress(this.maps.map.getBounds()).subscribe(
          (parkings: Parking[]) => {
              for (let parking of parkings) {
                this.maps.addMarker(parking.latitude, parking.longitude, parking._id);
                this.parks.push(parking);
              }
              setTimeout(function() {
                $(".bx-wrapper").bxSlider({
                  captions: true,
                  auto: false,
                  autoControls: true,
                  minSlides: 1,
                  maxSlides: 6,
                  moveSlides: 1,
                  slideMargin: 10,  
                  pager: true,
                  touchEnabled:true,
                  autoHover: true
                });
              }, 1000);
              
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
