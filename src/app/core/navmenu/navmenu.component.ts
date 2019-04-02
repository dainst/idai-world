import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dai-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  @Input() items;
  @Input() level = 0;

  constructor() {}

  ngOnInit() {}
}
