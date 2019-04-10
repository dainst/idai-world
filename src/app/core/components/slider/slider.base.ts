import * as $ from 'jquery';

import { ConfigurableComponent } from '../configurable/ConfigurableComponent';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export class SliderBase extends ConfigurableComponent implements AfterViewInit {
  @ViewChild('slides') slides: ElementRef;

  jQ = $;
  sliderConfig: any;

  ngAfterViewInit() {
    this.initSlider(this.slides.nativeElement);
  }

  initSlider(element) {
    const sliderConfig = this.sliderConfig;
    if (!sliderConfig) {
      console.warn(
        `no config for slider provided. Add field "sliderConfig" to class [${
          this.constructor.name
        }]`
      );
      return;
    }

    this.jQ(element).slick(sliderConfig);
  }
}
