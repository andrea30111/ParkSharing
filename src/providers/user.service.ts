import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { User } from '../models/user.model';

@Injectable()
export class UserService{

    constructor(private http: Http) {}

    retrieveUserData() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.get('/user/data' + token, {headers: headers})
            .map((response: Response) => {
                console.log(response);
                const user = response.json().obj;
                return new User(
                    user.email,
                    user.password,
                    user.firstName,
                    user.lastName,
                    user.fiscalCode                    
                );
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateUserData(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('/user/data' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
