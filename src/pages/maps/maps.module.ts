import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsComponent } from './maps';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    IonicPageModule.forChild(MapsComponent)
  ],
})
export class MapsModule {}
