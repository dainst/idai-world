import { Component, Inject, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { GLOBALS } from "../../injectionTokens";

import get from "lodash/get";
import { Router } from "@angular/router";
import { DefaultService, Project } from "src/app/generated/search";

interface Suggestion {
  term: string;
  project: Project;
}

interface TranslatedContent {
  de?: string;
  en?: string;
}

@Component({
  selector: "dai-idai-search",
  templateUrl: "./idai-search.component.html",
  styleUrls: ["./idai-search.component.scss"],
})
export class IdaiSearchComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public disableCategories: boolean;
  @Input() public resultProp = "suggestions";
  @Input() public showCategory = true;

  @Input() public categories: string[];

  public selectedCategory: string;
  public suggestions: Suggestion[] = [];
  public selectedSuggestionIndex = -1;

  public isInputFocused = false;

  private termChange: Subject<any> = new Subject();
  private inputFocusChange: Subject<boolean> = new Subject();

  constructor(
    @Inject(GLOBALS) private globals,
    private service: DefaultService,
    private router: Router
  ) {
    this.termChange
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((term) => this.search(term));

    this.inputFocusChange
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((isFocused) => (this.isInputFocused = isFocused));
  }

  ngOnInit() {
    this.categories = this.categories || get(this.globals, "search.categories");

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
    this.selectedSuggestionIndex = -1;
    this.inputFocusChange.next(true);
  }

  onSearchInputBlur() {
    this.selectedSuggestionIndex = -1;
    this.inputFocusChange.next(false);
  }

  onSearchInputKeyup(event: KeyboardEvent) {
    if (this.suggestions.length) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.selectedSuggestionIndex < this.suggestions.length - 1
          ? this.selectedSuggestionIndex++
          : this.selectedSuggestionIndex;
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.selectedSuggestionIndex > 0
          ? this.selectedSuggestionIndex--
          : this.selectedSuggestionIndex;
        return;
      }
      if (event.key === "Enter" && this.selectedSuggestionIndex) {
        this.onSuggestionClick(this.suggestions[this.selectedSuggestionIndex]);
      }
    }

    this.onSearchTermChange((event.target as HTMLInputElement).value);
  }

  search(term: string) {
    this.service.searchGet(term).subscribe((result) => {
      console.log(`Search results for ${term}:`, result);

      this.suggestions = this.makeLinks(result.results);
    });
  }

  onSuggestionClick(suggestion: Suggestion) {
    this.router.navigate(["/project"], {
      state: { project: suggestion },
    });
  }

  private makeLinks(projects: Project[] = []) {
    return projects.map((project) => ({
      term: (project.title as TranslatedContent).de,
      project: project,
    }));
  }
}
