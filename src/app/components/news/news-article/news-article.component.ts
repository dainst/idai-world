import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { HtmlLoaderService } from 'src/app/core/service/html-loader.service';

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

@Component({
  selector: 'dai-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit, AfterViewInit {
  // @ViewChild('marker') markerElement: ElementRef<HTMLElement>;
  @ViewChild('article', { static: true }) containerElement: ElementRef<HTMLElement>;
  // @ViewChild('teaser') teaserElement: ElementRef<HTMLElement>;

  @Input() config: NewsArticleConfig;

  public isLoading = false;

  public date: string;
  public category: string;
  public headline: string;

  public teaser: TeaserConfig;
  public more: MoreConfig;

  public showMore = false;

  constructor(private loader: HtmlLoaderService) {}

  ngOnInit() {
    const { headline, date, category, teaser, more } = this.config;

    this.headline = headline;
    this.date = date;
    this.category = category;
    this.resolveHtml(teaser).then(
      result => (this.teaser = result as TeaserConfig)
    );
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

  resolveHtml = (
    config: TeaserConfig | MoreConfig
  ): Promise<TeaserConfig | MoreConfig> => {
    if (config.content_html) {
      this.isLoading = true;
      return this.loader
        .loadHtml(config.content_html)
        .then(result => ({ ...config, content: result }))
        .finally(() => (this.isLoading = false));
    }
    return Promise.resolve({ ...config });
  }

  async onShowMoreClick() {
    if (!this.more) {
      this.resolveHtml(this.config.more).then(
        result => (this.more = result as MoreConfig)
      );
    }
    this.showMore = !this.showMore;
  }
}
