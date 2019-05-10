import { Component, ViewChild, ElementRef } from '@angular/core';
import { SliderBase } from 'src/app/core/components/slider/slider.base';

const ALIGNMENTS = {
  center: 'center',
  left: 'left',
  right: 'right'
};
@Component({
  selector: 'dai-slider-image .section-archeological-images',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent extends SliderBase {
  @ViewChild('slides') slides: ElementRef;
  public images: any[] = [];

  public slideHeight: string;
  public useFullWidth = true;
  public align = ALIGNMENTS.center; // 'left', 'right

  sliderConfig = {
    fade: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  onSetConfig = (
    config = {
      title: '',
      description: '',
      content: [],
      height: '',
      fullWidth: true,
      align: ''
    }
  ) => {
    const {
      title = '',
      description = '',
      content = [],
      height = '500px',
      fullWidth = true,
      align
    } = config;

    this.useFullWidth = fullWidth;
    this.align = align in ALIGNMENTS ? align : ALIGNMENTS.center;

    const defaultTarget = 'route://.';

    this.slideHeight = height;

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
