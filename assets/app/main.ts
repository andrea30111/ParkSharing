import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";
import { Observable } from 'rxjs/Observable'


platformBrowserDynamic().bootstrapModule(AppModule);