import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLinkTileComponent } from './image-link-tile.component';

describe('ImageLinkTileComponent', () => {
  let component: ImageLinkTileComponent;
  let fixture: ComponentFixture<ImageLinkTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLinkTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLinkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
