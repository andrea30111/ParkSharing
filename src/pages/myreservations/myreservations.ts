import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../providers/reservation.service';

/**
 * Generated class for the MyreservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myreservations',
  templateUrl: 'myreservations.html',
})
export class MyreservationsPage {

    reservations: Reservation[];
    editId: String;
    editedPark: Object;

    constructor(public navCtrl: NavController,private reservationService: ReservationService){
        
    }        
    
    ngOnInit(){
        //retrieve user's parkings
        this.reservationService.retrieveReservations().subscribe(
            (reservations: Reservation[]) => {
                this.reservations = reservations;
            },
            error => {
                console.error(error);
            }
        );
    }
}
