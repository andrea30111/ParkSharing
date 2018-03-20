import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    TabsPage 
  ],
  imports: [
    IonicPageModule,
    HeaderModule,
    IonicPageModule.forChild(TabsPage)
  ],
  exports: [
    TabsPage 
  ],
  entryComponents:[
    TabsPage
  ]
})
export class TabsPageModule {}
