import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';


/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare var Connection;


@Injectable()
export class ConnectivityProvider {
  onDevice = true;

  constructor(private network: Network) {
   
  }

  isOnline(): boolean {
    return true;
  }
 
  isOffline(): boolean {
    return false;
  }

  

}
