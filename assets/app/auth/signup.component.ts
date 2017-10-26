import { style } from '@angular/animations';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styles:[`input.ng-invalid.ng-touched {
        border: 1px solid red;
      }`]
})

export class SignupComponent implements OnInit{
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [
                Validators.required            ]),
            password: new FormControl('', Validators.required)
        });
    }
    //si poteva usare il form builder

}