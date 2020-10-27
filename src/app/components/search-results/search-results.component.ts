import { Component } from "@angular/core";

import { ConfigurableComponent } from "src/app/core/components/configurable/ConfigurableComponent";
import { Project } from "src/app/generated/search";

@Component({
  selector: "dai-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent extends ConfigurableComponent {
  public term: string;

  public results: Project[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.term = window.history.state.searchTerm;

    console.log("history term => ", this.term);
  }

  onSearchResultChange(results: Project[]) {}
}
