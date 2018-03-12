import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { ParkingService } from '../../providers/parking.service';
import { Parking } from '../../models/parking.model';
import { DateSearchComponent } from '../dateSearch/dateSearch';
import { ReservationService } from '../../providers/reservation.service';

declare var $ :any;
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'maps.html'
})
export class MapsComponent {
  address;
  map;
  parks;
  selectedParkingId;

   bookedPark ={
    date: this.calculateTime(''),
    hoursFrom: this.calculateTime('+1'),
    hoursTo: this.calculateTime('+3'),
    targa:''
  }

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
  constructor(public navCtrl: NavController, 
    public maps: GoogleMapsProvider, 
    public parkingService: ParkingService, 
    public platform: Platform, 
    public locations: LocationsProvider,
    public reservationService: ReservationService) {
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
    var thisComponent = this;
    this.platform.ready().then(() => {
      this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
        var listener = google.maps.event.addListener(this.maps.map, 'bounds_changed', function(){
          thisComponent.searchParkings();
          google.maps.event.removeListener(listener);
        });
          }).catch(() => {
              console.log("Cannot load map");
          });
      });
  }
 
  getAddress(address){
    this.address = address;
    
    this.maps.getPlaceById(this.address.place_id).subscribe(
      data => {
        this.maps.centerMap(data.result.geometry.location);
        this.searchParkings();
      },
      error => {
        console.error(error);
      }
    );

  }

  searchParkings(){
    this.parks = [];
    if(this.maps.map.getBounds() != undefined){
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
  }
  }

  goToStep(step, nextStep){
    $("div[data-step='"+step+"']").hide('1000');
    $("div[data-step='"+nextStep+"']").show('1000');  
  }

  selectParking(parkId){
    this.selectedParkingId = parkId;
  }

  pay(){
  //FIXME get real dates!
    var start = new Date();
    start.setDate(start.getDate() - 1);
    var end = new Date();

    this.reservationService.bookParking(this.selectedParkingId, start, end).subscribe(
      data => {
        console.log(data.message);          
      },
      error => {
        console.error(error);
      }
    );
  }

}
