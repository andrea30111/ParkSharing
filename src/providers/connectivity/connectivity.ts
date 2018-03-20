import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConnectivityProvider {
  onDevice = true;

  constructor() {
   
  }

  isOnline(): boolean {
    return true;
  }
 
  isOffline(): boolean {
    return false;
  }

  

}
