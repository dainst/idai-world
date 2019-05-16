import {
  Component,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';
import { ActivatedRoute } from '@angular/router';
import { NewsArticleComponent } from './news-article/news-article.component';

@Component({
  selector: 'dai-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends ConfigurableComponent
  implements AfterViewInit {
  @ViewChildren(NewsArticleComponent) articles!: QueryList<
    NewsArticleComponent
  >;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      let { item } = params;
      if (item) {
        item = parseInt(item, 10);

        const element = this.articles.toArray()[item - 1];
        if (element) {
          setTimeout(() => {
            element.containerElement.nativeElement.scrollIntoView();
          }, 200);
        }
      }
    });
  }
}
