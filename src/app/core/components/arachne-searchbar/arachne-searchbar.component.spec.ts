import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArachneSearchbarComponent } from './arachne-searchbar.component';

describe('ArachneSearchbarComponent', () => {
  let component: ArachneSearchbarComponent;
  let fixture: ComponentFixture<ArachneSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArachneSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArachneSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
