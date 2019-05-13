import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBALS } from '../../injectionTokens';

import { get } from 'lodash';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Suggestion {
  link: string;
  term: string;
}
@Component({
  selector: 'dai-arachne-searchbar',
  templateUrl: './arachne-searchbar.component.html',
  styleUrls: ['./arachne-searchbar.component.scss']
})
export class ArachneSearchbarComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public disableCategories: boolean;
  @Input() public targetUrl = 'https://arachne.dainst.org/search';
  @Input() public suggestionUrl = 'https://arachne.dainst.org/data/suggest';
  @Input() public resultProp = 'suggestions';
  @Input() public showCategory = true;

  @Input() public categories: string[];
  public selectedCategory: string;
  public suggestions: Suggestion[] = [];
  public selectedSuggestionIndex = -1;

  public isInputFocused = false;

  private termChange: Subject<any> = new Subject();

  constructor(@Inject(GLOBALS) private globals, private http: HttpClient) {
    this.termChange
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(term => this.search(term));
  }

  ngOnInit() {
    this.targetUrl = this.targetUrl || get(this.globals, 'search.targetUrl');
    this.resultProp = this.resultProp || get(this.globals, 'search.resultProp');
    this.suggestionUrl =
      this.suggestionUrl || get(this.globals, 'search.suggestionUrl');

    this.categories = this.categories || get(this.globals, 'search.categories');

    this.showCategory =
      this.showCategory === undefined ? true : this.showCategory;
  }

  onSearchTermChange(term: string) {
    if (!term) {
      this.suggestions = [];
    }
    this.termChange.next(term);
  }

  onCategoryClick(category: string) {
    this.selectedCategory =
      category === this.selectedCategory ? undefined : category;
  }

  onSearchInputFocus() {
    this.isInputFocused = true;
    this.selectedSuggestionIndex = -1;
  }

  onSearchInputBlur() {
    this.isInputFocused = false;
    this.selectedSuggestionIndex = -1;
  }

  onSearchInputKeyup(event: KeyboardEvent) {
    if (this.suggestions.length) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.selectedSuggestionIndex < this.suggestions.length - 1
          ? this.selectedSuggestionIndex++
          : this.selectedSuggestionIndex;
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.selectedSuggestionIndex > 0
          ? this.selectedSuggestionIndex--
          : this.selectedSuggestionIndex;
        return;
      }
      if (event.key === 'Enter' && this.selectedSuggestionIndex) {
        window.location.href = this.suggestions[
          this.selectedSuggestionIndex
        ].link;
      }
    }

    this.onSearchTermChange((event.target as HTMLInputElement).value);
  }

  search(term: string) {
    // https://arachne.dainst.org/search?fq=facet_kategorie:%22Einzelobjekte%22&amp;fl=20&amp;q=athen
    this.http
      .get<{ suggestions: string[] }>(this.requestUrl(term))
      .subscribe(result => {
        this.suggestions = this.makeLinks(get(result, this.resultProp));
      });
  }

  private makeLinks(terms: string[] = []) {
    // https://arachne.dainst.org/search?${fq:}q=${term}
    const categoryParam = this.selectedCategory
      ? `fq=facet_kategorie:"${this.selectedCategory}"&`
      : '';
    return terms.map(term => ({
      link: encodeURI(`${this.targetUrl}?${categoryParam}q=${term}`),
      term
    }));
  }

  private requestUrl(term) {
    return `${this.suggestionUrl}?q=${term}`;
  }
}
