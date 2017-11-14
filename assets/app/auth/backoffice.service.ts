import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { User } from './user.model';
@Injectable()
export class BackofficeService{

    constructor(private http: Http) {}

    addUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
