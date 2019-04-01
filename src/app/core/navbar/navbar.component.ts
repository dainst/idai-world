import { Component, OnInit, Input } from '@angular/core';
import { MenuEntry } from '../config/DaiAppConfig';

@Component({
  selector: 'dai-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  public menuEntries: MenuEntry[];

  constructor() {}

  ngOnInit() {}
}
