import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@IonicPage()
@Component({
    selector: 'page-userarea',
    templateUrl: 'userarea.html'
})

export class UserareaPage implements OnInit{
    myForm: FormGroup;
    submitMessage: String;
    address;

    constructor(public navCtrl: NavController, private userService: UserService){
 
    }
 
    ngOnInit(){
        //initialize form validator
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

        this.userService.retrieveUserData().subscribe(
            (user: User) => {
                this.myForm.patchValue({email: user.email});
                this.myForm.patchValue({password: user.password});
                this.myForm.patchValue({firstName: user.firstName});
                this.myForm.patchValue({lastName: user.lastName});
                this.myForm.patchValue({fiscalCode: user.fiscalCode});
            },
            error => {
                console.error(error);
            }
        );
    }

    onSubmit(){
        const user = new User(
            this.myForm.value.email, 
            this.myForm.value.password, 
            this.myForm.value.firstName, 
            this.myForm.value.lastName, 
            this.myForm.value.fiscalCode);
            this.userService.updateUserData(user)
                .subscribe(
                    data => {
                        console.log(data);
                        this.submitMessage = data.message;
                    },
                    error => {
                        console.error(error);
                        this.submitMessage = error.title;
                    }
                );
            this.myForm.reset;

    }
}