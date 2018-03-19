import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsComponent } from './maps';
import { DateSearchModule} from '../datesearch/datesearch.module';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    DateSearchModule,
    IonicPageModule.forChild(MapsComponent),
    GooglePlacesAutocompleteComponentModule
  ],
})
export class MapsModule {}
