import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "src/app/generated/search";

@Component({
  selector: "dai-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  public project: Project;

  public result: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("navigation extras:", history.state.project);

    if (history.state.project) {
      this.project = history.state.project;

      this.result = JSON.stringify(this.project, null, 2);
    }
  }
}
