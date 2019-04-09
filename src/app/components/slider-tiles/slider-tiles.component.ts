import * as $ from 'jquery';

import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';
import { ImageLinkTileComponent } from './image-link-tile/image-link-tile.component';
import { LinkListTileComponent } from './link-list-tile/link-list-tile.component';
import { TextTileComponent } from './text-tile/text-tile.component';

function initSlider(element) {
  $(element).slick({
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
          infinite: false,
          variableWidth: true
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
        breakpoint: 1200,
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
  });
}
@Component({
  selector: 'dai-slider-tiles',
  templateUrl: './slider-tiles.component.html',
  styleUrls: ['./slider-tiles.component.scss']
})
export class SliderTilesComponent extends ConfigurableComponent
  implements OnInit, AfterViewInit {
  @ViewChild('slides') slides: ElementRef;
  @Input()
  public tiles: any[] = [];

  @Input()
  public title = '';

  constructor() {
    super();
  }

  ngAfterViewInit() {
    initSlider(this.slides.nativeElement);
  }

  onSetConfig = (config = { title: '', tiles: [] }) => {
    this.title = config.title;
    this.tiles = config.tiles.map(tileConfig => ({
      ...tileConfig,
      type: this.getTypeForTile(tileConfig.type)
    }));
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

/*
{
    "type": "slider_tiles",
    "tiles": [
      {
        "type": "image_link",
        "image": "images/foobar.png",
        "headline": "Foobar 1",
        "subhead": "sub foobar",
        "link": { "target": "https://foo.bar.baz", "text": "foo link" }
      },
      {
        "type": "text",
        "image": "images/foobar.png",
        "headline": "Foobar 1",
        "subhead": "sub foobar",
        "text": "<p>a really long text can go here...</p><p>that can contain <b>markup<b>... <p>but only certain elements are allowed...</p>",
        "text_html": "mission-statement.slider_tile_2.html"
      },
      {
        "type": "link_list",
        "image": "images/foobar.png",
        "headline": "Foobar 1",
        "subhead": "sub foobar",
        "links": [
          { "target": "route://some/route", "text": "foo link" },
          { "target": "https://foo.bar.baz", "text": "foo link" }
        ]
      }
    ]
  }



*/
