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
  caption: string;
}

export interface NewsArticleConfig {
  date: string; // "22.04.2019",
  category: string;
  title: string;
  content: string;
  content_html: string;
  images: (string | ImageConfig)[];
}

@Component({
  selector: 'dai-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit, AfterViewInit {
  @ViewChild('marker') marker: ElementRef<HTMLElement>;
  @ViewChild('contentContainer') contentContainer: ElementRef<HTMLElement>;

  @Input() config: NewsArticleConfig;

  public markerPosY: any;

  constructor(private loader: HtmlLoaderService) {}

  ngOnInit() {
    if (this.config) {
      if (this.config.content_html) {
        this.loader
          .loadHtml(this.config.content_html)
          .then(result => (this.config.content = result));
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const getValue = () =>
        this.marker.nativeElement.offsetTop -
        this.contentContainer.nativeElement.offsetTop;

      fromEvent(window, 'resize')
        .pipe(
          map(getValue),
          startWith(getValue())
        )
        .subscribe(offset => {
          console.log();
          this.markerPosY = offset;
        });
    }, 10);
  }
}
