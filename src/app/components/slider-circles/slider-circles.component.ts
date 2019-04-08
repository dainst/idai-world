import * as $ from 'jquery';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

function initSlider(element) {
  $(element).slick({
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
  });
}

@Component({
  selector: 'dai-slider-circles',
  templateUrl: './slider-circles.component.html',
  styleUrls: ['./slider-circles.component.scss']
})
export class SliderCirclesComponent extends ConfigurableComponent
  implements OnInit, AfterViewInit {
  @ViewChild('slides') slides: ElementRef;

  public items: any[];

  constructor() {
    super();
  }

  onSetConfig(config) {
    const { items = [] } = config || {};
    this.items = items;
  }

  ngAfterViewInit() {
    initSlider(this.slides.nativeElement);
  }
}
