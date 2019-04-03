import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from '../navigation/navigation.component';
import { DaiAppConfig } from '../../config/DaiAppConfig';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, NavmenuComponent, NavigationComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: DaiAppConfig, useValue: new DaiAppConfig({}) }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
