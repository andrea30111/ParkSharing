import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit{
    myForm: FormGroup;
    errorMessage: String;
    name: String;

    constructor(private loginService: AuthService, private navCtrl: NavController){}
 
    ngOnInit(){
        this.name = localStorage.userName;
        this.myForm = new FormGroup({
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
            this.myForm.value.password 
        );
        this.loginService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('userId',data.userId);
                    this.name = data.userName + " " + data.userSurname;
                    localStorage.setItem('userName', data.userName + " " + data.userSurname);
                    this.navCtrl.popToRoot();
                    //non gestire la navigazione con angular ma con ionic
                    //this.router.navigateByUrl('/');                  
                },
                error => {
                    this.errorMessage = error.error.message;
                    console.error(error);
                }
            );
        this.myForm.reset;
    }

    doFacebook() {
        console.log('do FB');
        //this.facebookAuth.login().then(() => {
          //this.navCtrl.setRoot(HomePage);
        //});
    }

    doGoogle() {
        console.log('do Google');
        
    }

    isLoggedIn(){
        return this.loginService.isLoggedIn();
    }

    logout(){
        this.loginService.logout();
        this.name = null;
    }
}