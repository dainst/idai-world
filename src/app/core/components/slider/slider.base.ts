import * as $ from 'jquery';

import { ConfigurableComponent } from '../configurable/ConfigurableComponent';
import { ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

export class SliderBase extends ConfigurableComponent implements AfterViewInit {
  @ViewChild('slides') slides: ElementRef;

  enableSliding = true;

  numRows = 1;

  jQ = $;
  sliderConfig: any;

  ngAfterViewInit() {
    if (this.enableSliding) {
      this.initSlider(this.slides.nativeElement);
    }
  }

  initSlider(element) {
    const sliderConfig = this.sliderConfig;
    sliderConfig.rows = this.numRows;

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
