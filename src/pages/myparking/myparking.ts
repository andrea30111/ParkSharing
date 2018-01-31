import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Parking } from '../../models/parking.model';
import { ParkingService } from '../../providers/parking.service';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

@IonicPage()
@Component({
    selector: 'page-myparking',
    templateUrl: 'myparking.html'
})

export class MyparkingComponent implements OnInit{
    myForm: FormGroup;
    createMessage: String;
    address;

    constructor(private parkingService: ParkingService, private googleMapsProvider: GoogleMapsProvider){
 
    }
 
    ngOnInit(){

        this.myForm = new FormGroup({
            length: new FormControl('', Validators.required),
            width: new FormControl('', Validators.required),
            height: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            box_type: new FormControl(''),
            hourly_price: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        
        this.googleMapsProvider.getPlaceById(this.address.place_id).subscribe(
            data => {
                console.log(data);                
                console.log(data.place_id);                
                let latitude = data.result.geometry.location.lat;                
                let longitude = data.result.geometry.location.lng;       
                const parking = new Parking(
                    this.address.description, 
                    'city', 
                    1, 
                    latitude,
                    longitude,
                    this.myForm.value.length, 
                    this.myForm.value.width, 
                    this.myForm.value.height, 
                    this.myForm.value.type, 
                    this.myForm.value.box_type, 
                    this.myForm.value.hourly_price); 
        
                this.parkingService.createNew(parking)
                    .subscribe(
                        data => {
                            console.log(data);
                            this.createMessage = data.message;
                        },
                        error => {
                            console.error(error);
                            this.createMessage = error.title;
                        }
                    );         
            },
            error => {
                console.error(error);
            }
        );

        this.myForm.reset;
    }
    
    getAddress(address){
        this.address = address;
    }
}