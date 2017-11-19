import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { RegisterService } from '../../providers/register.service';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterComponent implements OnInit{
    myForm: FormGroup;

    constructor(private registerService: RegisterService){
        
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
        const user = new User(this.myForm.value.firstName, 
            this.myForm.value.lastName, 
            this.myForm.value.fiscalCode, 
            this.myForm.value.password, 
            this.myForm.value.email, 
            null);
        this.registerService.addUser(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset;
    }
}