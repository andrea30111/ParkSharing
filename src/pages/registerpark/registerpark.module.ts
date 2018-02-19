import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterparkComponent } from './registerpark';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

@NgModule({
  declarations: [
    RegisterparkComponent
  ],
  imports: [
    IonicPageModule.forChild(RegisterparkComponent),
    GooglePlacesAutocompleteComponentModule
  ],
  exports: [
    RegisterparkComponent
  ]
})
export class RegisterparkModule {}
