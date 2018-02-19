import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyparkingComponent } from './myparking';

@NgModule({
  declarations: [
    MyparkingComponent
  ],
  imports: [
    IonicPageModule.forChild(MyparkingComponent)
  ],
  exports: [
    MyparkingComponent
  ]
})
export class MyparkingModule {}
