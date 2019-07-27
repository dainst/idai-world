import * as $ from 'jquery';

import { ConfigurableComponent } from '../configurable/ConfigurableComponent';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export class SliderBase extends ConfigurableComponent implements AfterViewInit {
  @ViewChild('slides', { static: true }) slides: ElementRef;

  enableSliding = true;

  numRows = 1;

  jQ = $;
  sliderConfig: any;

  private _jqInstance: any;

  ngAfterViewInit() {
    if (this.enableSliding) {
      this.initSlider(this.slides.nativeElement);
    }
  }

  ngOnDestroy() {
    this._jqInstance && this._jqInstance.slick('unslick');
  }

  initSlider(element) {
    const sliderConfig = this.sliderConfig;
    sliderConfig.rows = this.numRows;

    if (!sliderConfig) {
      console.warn(`no config for slider provided. Add field "sliderConfig" to class [${this.constructor.name}]`);
      return;
    }

    this._jqInstance = this.jQ(element);

    this._jqInstance.slick(sliderConfig);
  }
}
