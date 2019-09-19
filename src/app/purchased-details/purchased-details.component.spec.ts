import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedDetailsComponent } from './purchased-details.component';

describe('PurchasedDetailsComponent', () => {
  let component: PurchasedDetailsComponent;
  let fixture: ComponentFixture<PurchasedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
