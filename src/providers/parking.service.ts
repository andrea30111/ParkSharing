import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Parking } from '../models/parking.model';

@Injectable()
export class ParkingService{

    constructor(private http: Http) {}

    createNew(parking: Parking) {
        const body = JSON.stringify(parking);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/parking', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
