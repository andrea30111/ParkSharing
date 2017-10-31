import './polyfills';
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
import { Observable } from 'rxjs/Observable'

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);