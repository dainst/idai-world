import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dai-arachne-searchbar',
  templateUrl: './arachne-searchbar.component.html',
  styleUrls: ['./arachne-searchbar.component.scss']
})
export class ArachneSearchbarComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public disableCategories: boolean;

  constructor() {}

  ngOnInit() {}
}
