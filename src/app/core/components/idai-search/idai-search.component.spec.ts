import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdaiSearchComponent } from './idai-search.component';

describe('IdaiSearchComponent', () => {
  let component: IdaiSearchComponent;
  let fixture: ComponentFixture<IdaiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdaiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdaiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
