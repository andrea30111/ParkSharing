import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyparkingComponent } from './myparking';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    MyparkingComponent
  ],
  imports: [
    IonicPageModule.forChild(MyparkingComponent),
    CalendarModule
  ],
  exports: [
    MyparkingComponent
  ]
})
export class MyparkingModule {}
