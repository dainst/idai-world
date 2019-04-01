import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCirclesComponent } from './slider-circles.component';

describe('SliderCirclesComponent', () => {
  let component: SliderCirclesComponent;
  let fixture: ComponentFixture<SliderCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
