import { Component, OnInit } from '@angular/core';
declare var google: any;


@Component({
    selector: 'app-maps2',
    templateUrl: 'maps2.component.html',
    styleUrls: ['maps2.component.css']
})

export class Maps2Component implements OnInit {
    constructor() { }

    ngOnInit() { 
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: {lat: 24.886, lng: -70.268},
          });
  
          // Define the LatLng coordinates for the polygon's  outer path.
          var outerCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757}
          ];
  
          // Define the LatLng coordinates for the polygon's inner path.
          // Note that the points forming the inner path are wound in the
          // opposite direction to those in the outer path, to form the hole.
          var innerCoords = [
            {lat: 28.745, lng: -70.579},
            {lat: 29.570, lng: -67.514},
            {lat: 27.339, lng: -66.668}
          ];
  
          // Construct the polygon, including both paths.
          var bermudaTriangle = new google.maps.Polygon({
            paths: [outerCoords, innerCoords],
            strokeColor: '#FFC107',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FFC107',
            fillOpacity: 0.35
          });
          bermudaTriangle.setMap(map);
    }
}