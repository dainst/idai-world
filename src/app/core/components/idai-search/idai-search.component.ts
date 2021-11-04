import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { GLOBALS } from '../../injectionTokens';

import {get} from 'lodash';
import { DefaultService, Collection } from 'src/app/generated/search';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dai-idai-search',
  templateUrl: './idai-search.component.html',
  styleUrls: ['./idai-search.component.scss'],
})
export class IdaiSearchComponent implements OnInit {
  @Input() public disabled = false;
  @Input() public placeholder: string;
  @Input() public disableCategories: boolean;
  @Input() public resultProp = 'suggestions';
  @Input() public showCategory = true;
  @Input() public term: string;

  @Input() public categories: string[];

  @Output() public resultChange = new EventEmitter<Collection[]>();
  @Output() public searchTermChange = new EventEmitter<string>();
  @Output() public submit = new EventEmitter<string>();

  public selectedCategory: string;

  @Output() public termChange = new EventEmitter<string>();

  constructor(
    @Inject(GLOBALS) private globals,
    private service: DefaultService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.termChange.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(((term) => {
        console.log('Searching for:', term);

        if (this.disabled) {
          return;
        }

        if (term) {
          this.search(term);
        } else {
          this.resultChange.emit([]);
        }
      })
    );

    // Ensure the query param "q" triggers an initial search, to allow search linking
    this.route.queryParams.subscribe(params => {
      if (params.q) {
        this.term = params.q;
        this.termChange.emit(params.q);
      }
    });

    this.categories = this.categories || get(this.globals, 'search.categories');

    this.showCategory =
      this.showCategory === undefined ? true : this.showCategory;
    //
    // if (this.term) {
    //   this.search(this.term);
    // }
  }
  //
  // onSearchTermChange(term: string) {
  //   this.termChange.next(term);
  // }

  onCategoryClick(category: string) {
    this.selectedCategory =
      category === this.selectedCategory ? undefined : category;
  }

  // onSearchInputKeyup(event: KeyboardEvent) {
  //   this.onSearchTermChange((event.target as HTMLInputElement).value);
  // }
  //
  onKeyupEnter() {
    this.submit.emit(this.term);
  }

  search(term: string) {
    this.service.search(term).subscribe((result) => {
      console.log(`Search results for ${term}:`, result);

      this.resultChange.emit(result.results);
    });
  }
}
