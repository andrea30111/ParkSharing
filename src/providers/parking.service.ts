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
        return this.http.post('/parking' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    retrieveParkings() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.get('/parking' + token, {headers: headers})
            .map((response: Response) => {
                const parkings = response.json().obj;
                let transformedMessages: Parking[] = [];
                for (let parking of parkings) {
                    transformedMessages.push(new Parking(
                        parking.name,
                        parking.description,
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
                        parking.user,
                        parking._id)
                    );
                }
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getParkingsByAddress(bounds, startTime, endTime){
        const headers = new Headers({'Content-Type': 'application/json'});
        var body = {};
        if(bounds != undefined){
        body["minBounds"] = bounds.getSouthWest();
        body["maxBounds"] = bounds.getNorthEast();
        body["startTime"] = startTime;
        body["endTime"] = endTime;
        JSON.stringify(body);
        return this.http.post('/maps', body, {headers: headers})
            .map((response: Response) => {
                const parkings = response.json().obj;
                let transformedMessages: Parking[] = [];
                for (let parking of parkings) {
                    transformedMessages.push(new Parking(
                        parking.name,
                        parking.description,
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
                        parking.user,
                        parking._id)
                    );
                }
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
        }   
    }

    setAvailability(slot){
        const body = JSON.stringify(slot);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('/parking/availability' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
