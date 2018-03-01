//IONIC

//installazione ionic e cordova come global package
npm install -g ionic cordova
//creazione progetto ionic (crea una folder col nome del progetto, sarà la root della nostra app quindi posizionati prima dove lo vuoi creare)
ionic start nomeprogetto blank
//fai checkout del master branch git nella folder appena creata
//la cartella "server" contiene il minimo indispensabile di quello che avevamo fatto per node, a parte alcune cartelle che vanno copiate a mano dal tuo vecchio progetto (es: bin, node_modules,...)

//per avviare l'app posizionati nella root, quella creata con ionic
mongod
ionic serve
cd server
npm start

//END IONIC

//per autenticazione
npm install --save bcryptjs
npm install --save jsonwebtoken

//Google maps 
--devi fare da qui
ionic g provider Connectivity
ionic g provider GoogleMaps
ionic g provider Locations
//dopo questo bisongna riavviare
ionic cordova plugin add cordova-plugin-network-information
npm install @ionic-native/core --save

ionic cordova plugin add cordova-plugin-geolocation --variable 
GEOLOCATION_USAGE_DESCRIPTION="To locate you"

ionic cordova plugin add cordova-plugin-network-information
npm install --save @ionic-native/network
npm install --save @ionic-native/geolocation


https://stackoverflow.com/questions/42427915/ionic-2-google-places-and-autocomplete-location

--fino a qui---



Cose da fare

npm run build
npm start

nella cartella di bin in mongoDB eseguire "sudo ./mongod"

//libreria per maps
https://angular-maps.com/

//autocomplete per maps
http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

//componenti ui angular
https://angular-ui.github.io/

alt + 9 = `

//installazione mongoose
npm install --save mongoose

//google maps
npm install -g @angular/cli

//jQuery
npm install --save jquery
npm install -D @types/jquery
vedi come è usato in app.component.ts

//Autocomplete 
npm install --save ionic2-google-places-autocomplete

//Storage
npm install --save @ionic/storage