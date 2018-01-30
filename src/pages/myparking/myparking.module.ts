import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyparkingComponent } from './myparking';
import { AutocompleteComponent } from '../autocomplete/autocomplete';

@NgModule({
  declarations: [
    MyparkingComponent
  //  AutocompleteComponent
  ],
 // entryComponents: [AutocompleteComponent],
  imports: [
    IonicPageModule.forChild(MyparkingComponent)
  ],
  exports: [
    MyparkingComponent
  ]
})
export class MyparkingModule {}
