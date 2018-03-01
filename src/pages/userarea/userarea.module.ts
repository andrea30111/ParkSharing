import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserareaPage } from './userarea';

@NgModule({
  declarations: [
    UserareaPage
  ],
  imports: [
    IonicPageModule.forChild(UserareaPage)
  ],
  exports: [
    UserareaPage
  ]
})
export class UserareaModule {}
