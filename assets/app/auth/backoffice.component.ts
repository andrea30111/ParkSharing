import { style } from '@angular/animations';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { User } from './user.model';
import { BackofficeService } from './backoffice.service';


@Component({
    selector: 'app-backoffice',
    templateUrl: 'backoffice.component.html',
    styleUrls: ['backoffice.component.css']
})

export class BackofficeComponent implements OnInit{
    myForm: FormGroup;

    constructor(private backofficeService: BackofficeService){
        
     }
 
    ngOnInit(){

        this.myForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            fiscalCode: new FormControl('', Validators.required),
            email: new FormControl('', [
                Validators.required            ]),
            password: new FormControl('', Validators.required)
        });
    }
    //si poteva usare il form builder
    onSubmit() {
        console.log(this.myForm);
        const user = new User(this.myForm.value.firstName, 
            this.myForm.value.lastName, 
            this.myForm.value.fiscalCode, 
            this.myForm.value.password, 
            this.myForm.value.email, 
            null);
        this.backofficeService.addUser(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset;
    }
}