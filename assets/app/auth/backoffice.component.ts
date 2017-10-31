import { style } from '@angular/animations';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-backoffice',
    templateUrl: 'backoffice.component.html',
    styleUrls: ['backoffice.component.css']
})

export class BackofficeComponent implements OnInit{
    myForm: FormGroup;


    ngOnInit(){

        this.myForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            fiscalCode: new FormControl('', Validators.required),
            email: new FormControl('', [
                Validators.required            ]),
            password: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required)
        });
    }
    //si poteva usare il form builder

}