import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDocumentsComponent } from './amount-documents.component';

describe('AmountDisplayComponent', () => {
  let component: AmountDocumentsComponent;
  let fixture: ComponentFixture<AmountDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmountDocumentsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
