import {Component, Input, OnInit} from '@angular/core';
import {Collection, ExternalLink, GeneralTopic} from 'src/app/generated/search';
import {get} from 'lodash';

@Component({
  selector: 'dai-idai-search-result-item',
  templateUrl: './idai-search-result-item.component.html',
  styleUrls: ['./idai-search-result-item.component.scss'],
})

export class IdaiSearchResultItemComponent implements OnInit {
  @Input() public data: Collection;
  public topics: Array<GeneralTopic>;
  public externalImages: Array<ExternalLink>;
  public externalLinks: Array<ExternalLink>;

  constructor() {
    this.topics = [];
    this.externalImages = [];
    this.externalLinks = [];
  }

  ngOnInit() {
    this.topics = [].concat(
      get(this.data, 'core_fields.general_topics', []),
      get(this.data, 'core_fields.spatial_topics',  []),
    );

    this.externalLinks = get(this.data, 'core_fields.external_links', []).filter(v => v.type !== 'image');
    this.externalImages = get(this.data, 'core_fields.external_links', []).filter(v => v.type === 'image');
  }
}
