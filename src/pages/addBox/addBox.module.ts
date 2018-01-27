import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { addBoxPage } from './addBox';

@NgModule({
  declarations: [
    addBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(addBoxPage),
  ],
})
export class addBoxPageModule {}
