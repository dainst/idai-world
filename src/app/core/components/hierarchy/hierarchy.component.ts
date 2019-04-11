import { Component, OnInit, Input } from '@angular/core';
import { HierarchyNode } from '../../model/HierarchyNode';

@Component({
  selector: 'dai-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  @Input() nodes: HierarchyNode[];
  @Input() level = 1;

  constructor() {}

  ngOnInit() {}
}
