import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateSearchComponent } from './dateSearch';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    DateSearchComponent
  ],
  imports: [
    IonicPageModule.forChild(DateSearchComponent),
    CalendarModule
  ],
  exports: [
    DateSearchComponent
  ]
})
export class DateSearchModule {}
