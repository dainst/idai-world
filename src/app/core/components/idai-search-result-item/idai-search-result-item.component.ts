import {Component, Input, OnInit} from '@angular/core';
import {Project} from 'src/app/generated/search';

@Component({
  selector: 'dai-idai-search-result-item',
  templateUrl: './idai-search-result-item.component.html',
  styleUrls: ['./idai-search-result-item.component.scss'],
})
export class IdaiSearchResultItemComponent implements OnInit {
  @Input() public data: Project;

  constructor() {
  }

  ngOnInit() {
    console.log('Y', this.data);
  }
}
