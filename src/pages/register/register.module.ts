import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    IonicPageModule.forChild(RegisterComponent)
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule {}
