import { LocationsProvider } from './locations/locations';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Parking } from '../models/parking.model';

@Injectable()
export class ParkingService{

    constructor(private http: Http) {}

    createReservation() {
    }

    retrieveReservations() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.get('http://localhost:3000/reservation' + token, {headers: headers})
            .map((response: Response) => {
                const reservations = response.json().obj;
                let transformedReservations: Reservation[] = [];
                for (let reservation of reservations) {
                    transformedReservations.push(new Reservation(reservation));
                }
                return transformedReservations;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
