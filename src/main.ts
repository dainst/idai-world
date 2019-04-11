import 'simplebar';
// import 'simplebar/dist/simplebar.css';
import './js/main.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { DaiAppConfig } from './app/core/config/DaiAppConfig';
import { AppConfigLoader } from './app/core/config/ConfigLoader';

if (environment.production) {
  enableProdMode();
}

AppConfigLoader.loadAppConfig().then(config =>
  platformBrowserDynamic([
    { provide: DaiAppConfig, deps: [], useValue: config }
  ])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err))
);