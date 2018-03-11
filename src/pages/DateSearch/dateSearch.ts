import { AuthService } from '../../providers/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar'
@Component({
  selector: 'DateSearch',
  templateUrl: 'dateSearch.html'
})
export class DateSearchComponent{

  searchDate = 'day';
  date: string;
  type: 'js-date';
  dateRange: { from: string; to: string; };
  optionsRange: CalendarComponentOptions = {
      pickMode: 'range'
  };

  bookedPark ={
    hoursFrom: this.calculateTime('+1'),
    hoursTo: this.calculateTime('+3'),
  }

  changeDay($event) {
    console.log($event);
  }

  changeRange($event) {
    console.log($event);
  }

  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();

    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));

    return nd.toISOString();
  }  


}
