import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Reservation } from '../models/reservation.model';

@Injectable()
export class ReservationService{

    constructor(private http: Http) {}

    bookParking(parkingId, start, end) {
        var body = {};
        body["parkingId"] = parkingId;
        body["start"] = start;
        body["end"] = end;
        JSON.stringify(body);
        
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('/reservation' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    retrieveReservations() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.get('/reservation' + token, {headers: headers})
            .map((response: Response) => {
                const reservations = response.json().obj;
                let transformedReservations: Reservation[] = [];
                for (let reservation of reservations) {
                    transformedReservations.push(new Reservation(
                        reservation.user,
                        reservation.parking,
                        reservation.car,
                        reservation.start_ts,
                        reservation.end_ts,
                        reservation.amount,
                        reservation.payment_type
                    ));
                }
                return transformedReservations;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
