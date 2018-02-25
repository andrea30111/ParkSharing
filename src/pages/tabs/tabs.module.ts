import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HeaderModule } from '../header/header.module';
import { UserareaModule } from '../userarea/userarea.module';

@NgModule({
  declarations: [
    TabsPage 
  ],
  imports: [
    IonicPageModule,
    HeaderModule,
    UserareaModule
  ],
  exports: [
    TabsPage 
  ],
  entryComponents:[
    TabsPage
  ]
})
export class TabsPageModule {}
