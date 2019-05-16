import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { HtmlLoaderService } from 'src/app/core/service/html-loader.service';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface ImageConfig {
  src: string;
  title: string;
  caption: string;
}

interface TeaserConfig {
  content: string;
  content_html: string;
  image: string | ImageConfig;
}

interface MoreConfig {
  content: string;
  content_html: string;
  images: (string | ImageConfig)[];
}
export interface NewsArticleConfig {
  date: string; // "22.04.2019",
  category: string;
  headline: string;
  teaser: TeaserConfig;
  more: MoreConfig;
}

/*
{
  "date": "22.04.2019",
  "category": "Publication",
  "headline": "A great discovery",
  "teaser": {
    "content": "gdsdgfs",
    "content_html": ""
     "image": {
      "src": "/assets/images/content/news/idai_news_ayda.jpg",
      "title": "image title",
      "caption": "an image caption"
    }
  },
  "more": {
    "images": [
      "/assets/images/content/news/idai_news_ayda.jpg",
      {
        "src": "/assets/images/content/news/idai_news_ayda.jpg",
        "caption": "This is the image caption"
      },
      {
        "src": "/assets/images/content/news/idai_news_ayda.jpg",
        "caption": "This is the image caption"
      }
    ],
    "content": "",
    "content_html": ""
  }
}
*/

@Component({
  selector: 'dai-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit, AfterViewInit {
  @ViewChild('marker') markerElement: ElementRef<HTMLElement>;
  @ViewChild('article') containerElement: ElementRef<HTMLElement>;
  @ViewChild('teaser') teaserElement: ElementRef<HTMLElement>;

  @Input() config: NewsArticleConfig;

  public markerPosY: any;

  public date: string;
  public category: string;
  public headline: string;

  public teaser: TeaserConfig;
  public more: MoreConfig;

  public showMore = false;

  constructor(private loader: HtmlLoaderService) {}

  ngOnInit() {
    const resolveHtml = (
      config: TeaserConfig | MoreConfig
    ): TeaserConfig | MoreConfig => {
      const conf = { ...config };
      if (config.content_html) {
        this.loader
          .loadHtml(config.content_html)
          .then(result => (conf.content = result));
      }

      return conf;
    };

    const { headline, date, category, teaser, more } = this.config;

    this.headline = headline;
    this.date = date;
    this.category = category;
    this.teaser = resolveHtml(teaser) as TeaserConfig;
    this.more = resolveHtml(more) as MoreConfig;
  }

  ngAfterViewInit() {
    // const getValue = () => {
    //   const bodyRect = this.containerElement.nativeElement.getBoundingClientRect();
    //   const elemRect = this.markerElement.nativeElement.getBoundingClientRect();
    //   return elemRect.top - bodyRect.top + elemRect.height;
    // };
    // const adapt = () =>
    //   (this.teaserElement.nativeElement.style.height = getValue() + 'px');
    // fromEvent(window, 'resize').subscribe(() => adapt());
    // setTimeout(() => {
    //   adapt();
    // }, 1000);
  }
}
