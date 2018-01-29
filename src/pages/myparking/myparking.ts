import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { IonicPage } from 'ionic-angular';
import { Parking } from '../../models/parking.model';
import { ParkingService } from '../../providers/parking.service';

@IonicPage()
@Component({
    selector: 'page-myparking',
    templateUrl: 'myparking.html'
})

export class MyparkingComponent implements OnInit{
    myForm: FormGroup;
    createMessage: String;
    constructor(private parkingService: ParkingService){
        
    }
 
    ngOnInit(){

        this.myForm = new FormGroup({
            address: new FormControl('', Validators.required),
            length: new FormControl('', Validators.required),
            width: new FormControl('', Validators.required),
            height: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            box_type: new FormControl(''),
            hourly_price: new FormControl('', Validators.required)
        });
    }

    onSubmit() {

        //TODO da calcolare lat long ecc dall'indirizzo
        //TODO salvare riferimento utente (non se lo sta prendendo)
        const parking = new Parking(
            this.myForm.value.address, 
            'city', 
            1, 
            1,
            1,
            this.myForm.value.length, 
            this.myForm.value.width, 
            this.myForm.value.height, 
            this.myForm.value.type, 
            localStorage.getItem('userId'),
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
        this.myForm.reset;
    }
}