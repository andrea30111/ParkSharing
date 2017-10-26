import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit{
    myForm: FormGroup;
    
        onSubmit(){
            console.log(this.myForm);
            this.myForm.reset();
        }
    
        ngOnInit(){
            this.myForm = new FormGroup({
                email: new FormControl('', [
                    Validators.required            ]),
                password: new FormControl('', Validators.required)
            });
        }
        //si poteva usare il form builder

}