import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { SliderBase } from 'src/app/core/components/slider/slider.base';

@Component({
  selector: 'dai-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent extends SliderBase
  implements OnInit, AfterViewInit {
  @ViewChild('slides') slides: ElementRef;
  public images: any[] = [];

  sliderConfig = {
    fade: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  constructor() {
    super();
  }

  onSetConfig = (config = { title: '', description: '', content: [] }) => {
    const { title = '', description = '', content = [] } = config;

    this.images = content.map(item => {
      if (typeof item === 'string') {
        return {
          src: item,
          title,
          description
        };
      }

      return {
        src: item.src,
        title: item.hasOwnProperty('title') ? item.title : title,
        description: item.hasOwnProperty('description')
          ? item.description
          : description
      };
    });
  }
}
