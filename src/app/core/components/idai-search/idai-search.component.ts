import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { GLOBALS } from "../../injectionTokens";

import get from "lodash/get";
import { DefaultService, Project } from "src/app/generated/search";

@Component({
  selector: "dai-idai-search",
  templateUrl: "./idai-search.component.html",
  styleUrls: ["./idai-search.component.scss"],
})
export class IdaiSearchComponent implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public placeholder: string;
  @Input() public disableCategories: boolean;
  @Input() public resultProp = "suggestions";
  @Input() public showCategory = true;
  @Input() public term: string;

  @Input() public categories: string[];

  @Output() public resultChange = new EventEmitter<Project[]>();
  @Output() public searchTermChange = new EventEmitter<string>();
  @Output() public submit = new EventEmitter<string>();

  public selectedCategory: string;

  private termChange: Subject<any> = new Subject();

  constructor(
    @Inject(GLOBALS) private globals,
    private service: DefaultService
  ) {
    if (this.disabled) {
      this.termChange.pipe(debounceTime(300));
    }

    this.termChange.pipe(distinctUntilChanged());

    this.termChange.subscribe((term) => {
      this.term = term;
      this.searchTermChange.emit(term);

      if (this.disabled) {
        return;
      }

      if (term) {
        this.search(term);
      } else {
        this.resultChange.emit([]);
      }
    });
  }

  ngOnInit() {
    this.categories = this.categories || get(this.globals, "search.categories");

    this.showCategory =
      this.showCategory === undefined ? true : this.showCategory;

    if (this.term) {
      this.search(this.term);
    }
  }

  onSearchTermChange(term: string) {
    this.termChange.next(term);
  }

  onCategoryClick(category: string) {
    this.selectedCategory =
      category === this.selectedCategory ? undefined : category;
  }

  onSearchInputKeyup(event: KeyboardEvent) {
    this.onSearchTermChange((event.target as HTMLInputElement).value);
  }

  onKeyupEnter() {
    this.submit.emit(this.term);
  }

  search(term: string) {
    this.service.searchGet(term).subscribe((result) => {
      console.log(`Search results for ${term}:`, result);

      this.resultChange.emit(result.results);
    });
  }
}
