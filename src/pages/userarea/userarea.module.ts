import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserareaComponent } from './userarea';

@NgModule({
  declarations: [
    UserareaComponent
  ],
  imports: [
    IonicPageModule.forChild(UserareaComponent)
  ],
  exports: [
    UserareaComponent
  ]
})
export class UserareaModule {}
