import { Component } from '@angular/core';
import { SliderBase } from 'src/app/core/components/slider/slider.base';

@Component({
  selector:
    // tslint:disable-next-line: max-line-length
    'dai-slider-circles .section__slider .partners-slider .section__three-tiles .section__textbox .section-open-access .decoration-bg-lighter-gray',
  templateUrl: './slider-circles.component.html',
  styleUrls: ['./slider-circles.component.scss']
})
export class SliderCirclesComponent extends SliderBase {
  sliderConfig = {
    slidesToShow: 1,
    sidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  };

  public items: any[];
  public title: string;

  constructor() {
    super();
  }

  onSetConfig(config) {
    const { items = [], title = '' } = config || {};
    this.items = items;
    this.title = title;
  }
}
