import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Parking } from '../../models/parking.model';
import { ParkingService } from '../../providers/parking.service';

@IonicPage()
@Component({
    selector: 'page-myparking',
    templateUrl: 'myparking.html'
})

export class MyparkingComponent implements OnInit{
    parkings: Parking[];
    editId: String;
    editedPark: Object;

    constructor(public navCtrl: NavController,private parkingService: ParkingService){
 
    }

    editPark(event){
        var idAttr = event.target.id;
        for (let park of this.parkings) {
            if(idAttr == park._id){
                this.editedPark = park;
            }
        }
    }
 
    ngOnInit(){
        //retrieve user's parkings
        this.parkingService.retrieveParkings().subscribe(
            (parkings: Parking[]) => {
                this.parkings = parkings;
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

}