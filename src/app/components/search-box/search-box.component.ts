import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ConfigurableComponent } from "src/app/core/components/configurable/ConfigurableComponent";

@Component({
  selector:
    "dai-search-box .section__textbox .textbox-with-search .section-open-access .decoration-bg-lighter-gray",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"],
})
export class SearchBoxComponent extends ConfigurableComponent {
  constructor(private router: Router) {
    super();
  }

  public onSearchSubmit(term: string) {
    this.router.navigate(["/search"], {
      state: { searchTerm: term },
    });
  }
}
