import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterComponent implements OnInit{
    myForm: FormGroup;

    constructor(private registerService: AuthService){
        
     }
 
    ngOnInit(){

        this.myForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            fiscalCode: new FormControl('', Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl('', Validators.required)
        });
    }
    //si poteva usare il form builder
    onSubmit() {
        const user = new User(
            this.myForm.value.email, 
            this.myForm.value.password, 
            this.myForm.value.firstName, 
            this.myForm.value.lastName, 
            this.myForm.value.fiscalCode, 
            null);
        this.registerService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset;
    }
}