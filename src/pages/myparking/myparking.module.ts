import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyparkingComponent } from './myparking';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

@NgModule({
  declarations: [
    MyparkingComponent
  ],
  imports: [
    IonicPageModule.forChild(MyparkingComponent),
    GooglePlacesAutocompleteComponentModule
  ],
  exports: [
    MyparkingComponent
  ]
})
export class MyparkingModule {}
