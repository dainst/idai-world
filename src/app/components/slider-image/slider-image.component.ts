import { Component, ViewChild, ElementRef } from '@angular/core';
import { SliderBase } from 'src/app/core/components/slider/slider.base';

@Component({
  selector: 'dai-slider-image .section-archeological-images',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent extends SliderBase {
  @ViewChild('slides') slides: ElementRef;
  public images: any[] = [];

  sliderConfig = {
    fade: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  onSetConfig = (config = { title: '', description: '', content: [] }) => {
    const { title = '', description = '', content = [] } = config;

    const defaultTarget = 'route://.';

    this.images = content.map(item => {
      if (typeof item === 'string') {
        return {
          src: item,
          title,
          description,
          link: { target: defaultTarget }
        };
      }

      const target = item.target || defaultTarget;

      return {
        src: item.src,
        title: item.hasOwnProperty('title') ? item.title : title,
        link: { target },
        description: item.hasOwnProperty('description')
          ? item.description
          : description
      };
    });
  }
}
