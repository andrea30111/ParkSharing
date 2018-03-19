import { Injectable } from '@angular/core';
import { ConnectivityProvider } from '../connectivity/connectivity';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from "@angular/http";

declare var jquery:any;
declare var $ :any;

 
declare var google;
 
@Injectable()
export class GoogleMapsProvider {
 
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  markers: any = [];
  apiKey: string = 'AIzaSyD1G8VfHJcQtFjuJFxulSq7Vx_okjQkLiQ';
 
  constructor(public connectivityService: ConnectivityProvider, private http: Http) {
 
  }
 
  init(mapElement: any, pleaseConnect: any): Promise<any> {
 
    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
 
    return this.loadGoogleMaps();
 
  }
 
  loadGoogleMaps(): Promise<any> {
 
    return new Promise((resolve) => {
 
      if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();
 
        if(this.connectivityService.isOnline()){
 
          window['mapInit'] = () => {
 
            this.initMap().then(() => {
              resolve(true);
            });
 
            this.enableMap();
          }
 
          let script = document.createElement("script");
          script.id = "googleMaps";
 
          if(this.apiKey){
            script.src = 'https://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'https://maps.google.com/maps/api/js?callback=mapInit';      
          }
 
          document.body.appendChild(script); 
 
        }
      }
      else {
 
        if(this.connectivityService.isOnline()){
          this.initMap().then(() => {
            resolve(true);
          });

          this.enableMap();
        }
        else {
          this.disableMap();
        }
 
      }
 
      this.addConnectivityListeners();
 
    });
 
  }
 
  initMap(): Promise<any> {
 
    this.mapInitialised = true;
 
    return new Promise((resolve) => {

      navigator.geolocation.getCurrentPosition((position) => {
 
        // UNCOMMENT FOR NORMAL USE
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        resolve(true);
 
      });
 
    });
 
  }

  centerMap(location): Promise<any> {
 
    this.mapInitialised = true;
 
    return new Promise((resolve) => {
   
        let mapOptions = {
          center: location,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        resolve(true);
 
    });
 
  }
 
  disableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "block";
    }
 
  }
 
  enableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "none";
    }
 
  }
 
  addConnectivityListeners(): void {
 
    document.addEventListener('online', () => {
 
      console.log("online");
 
      setTimeout(() => {
 
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
          this.loadGoogleMaps();
        }
        else {
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
 
      }, 2000);
 
    }, false);
 
    document.addEventListener('offline', () => {
 
      console.log("offline");
 
      this.disableMap();
 
    }, false);
 
  }
 
  addMarker(lat: number, lng: number, id: string): void {
 
    let latLng = new google.maps.LatLng(lat, lng);

    var icon = {

      path: "M70.169,31.688C70.169,42.827,50,82.887,50,82.887s-20.169-40.06-20.169-51.199S38.861,11.519,50,11.519  S70.169,20.549,70.169,31.688z M50,23.931c-4.284,0-7.757,3.473-7.757,7.757S50,47.746,50,47.746s7.757-11.774,7.757-16.058  S54.284,23.931,50,23.931z",
      fillColor: '#4A90E2',
      fillOpacity: 1,
      anchor: new google.maps.Point(0,0),
      strokeWeight: 0,
      scale: .5
  }
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: icon,
      id: id,
      type: 'point'
    });
    google.maps.event.addListener(marker, 'click', function() { 
      $("#"+marker.id).addClass("active"); 
      $("#"+marker.id).siblings().removeClass("active");
    });
    this.markers.push(marker); 
 
  }
 
  getPlaceById(placeId: string) {
    let request = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=AIzaSyDqA3ASlf5Mshe6bUVlPKiPdIhGQ7meBBk';
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(request, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
