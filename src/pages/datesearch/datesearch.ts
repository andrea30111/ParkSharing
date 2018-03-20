import { Component} from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar'
@IonicPage()
@Component({
  selector: 'DateSearch',
  templateUrl: 'datesearch.html'
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
