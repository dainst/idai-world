import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdaiSearchResultItemComponent } from './idai-search-result-item.component';

describe('IdaiSearchResultItemComponent', () => {
  let component: IdaiSearchResultItemComponent;
  let fixture: ComponentFixture<IdaiSearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdaiSearchResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdaiSearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
