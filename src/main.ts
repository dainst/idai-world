declare global {
  interface Window {
    $: any;
  }
}

import * as $ from 'jquery';
window.$ = $;
import 'simplebar';
import 'slick-carousel';
import 'bootstrap';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { DaiAppConfig } from './app/core/config/DaiAppConfig';
import { AppConfigLoader } from './app/core/config/ConfigLoader';
import { TextLimits } from './app/core/service/text-limits.service';

if (environment.production) {
  enableProdMode();
}

AppConfigLoader.loadAppConfig().then(config => {
  platformBrowserDynamic([
    { provide: DaiAppConfig, deps: [], useValue: config },
    {
      provide: TextLimits,
      deps: [],
      useValue: new TextLimits(config.textLimits)
    }
  ])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
