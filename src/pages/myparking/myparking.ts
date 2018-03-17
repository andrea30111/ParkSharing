import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Parking } from '../../models/parking.model';
import { ParkingService } from '../../providers/parking.service';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Availability } from '../../models/availability.model';

declare var $ :any;

@IonicPage()
@Component({
    selector: 'page-myparking',
    templateUrl: 'myparking.html'
})

export class MyparkingComponent implements OnInit{
    parkings: Parking[];
    editId: string;
    editedPark: Parking;
    searchDate = 'day';
    date: string;
    type: 'js-date';
    dateRange: { from: string; to: string; };
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    startTime;
    endTime;

    bookedPark ={
      hoursFrom: this.calculateTime('+1'),
      hoursTo: this.calculateTime('+3'),
    }
  
    changeDay($event) {
      console.log($event);
    }
  
    changeRange($event) {
      console.log($event);
    }
  
    calculateTime(offset: any) {
      // create Date object for current location
      let d = new Date();
  
      // create new Date object for different city
      // using supplied offset
      let nd = new Date(d.getTime() + (3600000 * offset));
  
      return nd.toISOString();
    }  
  

    constructor(public navCtrl: NavController,private parkingService: ParkingService){
        
    }

    scrollingFun($event){
        if($event.directionY == "down"){
            $(".addPark").fadeOut();
        }else{
            $(".addPark").fadeIn();
        }
        
    }

    editPark(event){
        var idAttr = event.target.id;
        if(idAttr == ''){
            this.editedPark = this.parkings[0];
        }else{
            for (let park of this.parkings) {
                if(idAttr == park._id){
                    this.editedPark = park;
                }
            }
        } 
    }
 
    ngOnInit(){
        //retrieve user's parkings
        this.parkingService.retrieveParkings().subscribe(
            (parkings: Parking[]) => {
                this.parkings = parkings;
                this.editedPark = this.parkings[0];
                console.log(this.parkings);
            },
            error => {
                console.error(error);
            }
        );
    }

    goToNewParking() {
        // go to the MyPage component
        this.navCtrl.push('RegisterparkComponent');
    }

    updateAvailability(){
        //FIXME get parameters from selection
        this.startTime = new Date();
        this.endTime = new Date();
        const slot = new Availability(this.parkings[0]._id, this.startTime, this.endTime);
        this.parkingService.setAvailability(slot)                    
        .subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.error(error);
            }
        );         
    }
}