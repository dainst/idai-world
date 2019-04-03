import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DaiAppConfig } from '../config/DaiAppConfig';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, NavmenuComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: DaiAppConfig, useValue: new DaiAppConfig({}) }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
