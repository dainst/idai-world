import { Component, Input, HostBinding, AfterViewInit } from '@angular/core';

import { ImageLinkTileComponent } from './image-link-tile/image-link-tile.component';
import { LinkListTileComponent } from './link-list-tile/link-list-tile.component';
import { TextTileComponent } from './text-tile/text-tile.component';
import { SliderBase } from 'src/app/core/components/slider/slider.base';

@Component({
  selector:
    // tslint:disable-next-line: max-line-length
    'dai-slider-tiles .section__three-tiles .tiles-slider .tiles-slider-two-rows .section__textbox .section-open-access .decoration-bg-lighter-gray',
  templateUrl: './slider-tiles.component.html',
  styleUrls: ['./slider-tiles.component.scss']
})
export class SliderTilesComponent extends SliderBase implements AfterViewInit {
  // alternatively also the host parameter in the @Component()` decorator can be used
  @HostBinding('class.infinite-tiles') addCls = false;

  sliderConfig = {
    slidesToShow: 1,
    sidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
          infinite: false,
          variableWidth: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 1250,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: false
        }
      },
      {
        breakpoint: 1800,
        settings: {
          infinite: false,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        }
      }
    ]
  };

  @Input()
  public tiles: any[] = [];

  @Input()
  public title = '';

  @Input()
  public text = '';

  onSetConfig = (
    config = { title: '', tiles: [], text: '', enableSliding: true, rows: 1 }
  ) => {
    this.text = config.text;
    this.numRows = config.rows;
    this.enableSliding =
      config.enableSliding === undefined ? true : config.enableSliding;

    this.title = this.limitText(config.title, this.getTextLimit('title'));

    this.tiles = config.tiles.map(tileConfig => ({
      ...tileConfig,
      textLimits: this.getLimitsForType(tileConfig),
      type: this.getTypeForTile(tileConfig.type)
    }));

    this.addCls = !this.enableSliding;
  }

  getLimitsForType(tileConfig: any) {
    if (!this.config.textLimits) {
      return {};
    }

    const limits = this.config.textLimits;
    const tileLimits = limits.tiles ? limits.tiles[tileConfig.type] : {};
    return { ...limits, ...tileLimits, ...(tileConfig.textLimits || {}) };
  }

  getTypeForTile(type) {
    switch (type) {
      case 'image_link':
        return ImageLinkTileComponent;
      case 'link_list':
        return LinkListTileComponent;
      case 'text':
        return TextTileComponent;
    }
  }
}
