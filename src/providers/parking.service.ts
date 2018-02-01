import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Parking } from '../models/parking.model';

@Injectable()
export class ParkingService{

    constructor(private http: Http) {}

    createParking(parking: Parking) {
        const body = JSON.stringify(parking);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('http://localhost:3000/parking' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    retrieveParkings() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.get('http://localhost:3000/parking' + token, {headers: headers})
            .map((response: Response) => {
                const parkings = response.json().obj;
                let transformedMessages: Parking[] = [];
                for (let parking of parkings) {
                    transformedMessages.push(new Parking(
                        parking.address,
                        parking.city,
                        parking.cap,
                        parking.latitude,
                        parking.longitude,
                        parking.length,
                        parking.width,
                        parking.height,
                        parking.type,
                        parking.box_type,
                        parking.hourly_price,
                        parking.daily_price,
                        parking.weekly_price,
                        parking.montly_price,
                        parking.user)
                    );
                }
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
