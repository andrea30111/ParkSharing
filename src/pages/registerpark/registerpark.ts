import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Parking } from '../../models/parking.model';
import { ParkingService } from '../../providers/parking.service';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

@IonicPage()
@Component({
    selector: 'page-registerpark',
    templateUrl: 'registerpark.html'
})

export class RegisterparkComponent implements OnInit{
    myForm: FormGroup;
    createMessage: String;
    address;

    constructor(public navCtrl: NavController, private parkingService: ParkingService, private googleMapsProvider: GoogleMapsProvider){
 
    }
 
    ngOnInit(){
        //initialize form validator
        this.myForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),            
            length: new FormControl('', Validators.required),
            width: new FormControl('', Validators.required),
            height: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            box_type: new FormControl('', Validators.required),
            hourly_price: new FormControl('', Validators.required)
        });

    }

    onSubmit() {
        
        this.googleMapsProvider.getPlaceById(this.address.place_id).subscribe(
            data => {
                let latitude = data.result.geometry.location.lat;                
                let longitude = data.result.geometry.location.lng;       
                const parking = new Parking(
                    this.myForm.value.name, 
                    this.myForm.value.description, 
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
        
                this.parkingService.createParking(parking)
                    .subscribe(
                        data => {
                            console.log(data);
                            this.createMessage = data.message;
                            this.navCtrl.push('MyparkingComponent');
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