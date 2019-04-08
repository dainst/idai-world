import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListTileComponent } from './link-list-tile.component';

describe('LinkListTileComponent', () => {
  let component: LinkListTileComponent;
  let fixture: ComponentFixture<LinkListTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkListTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
