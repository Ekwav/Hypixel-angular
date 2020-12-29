import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidElementComponent } from './bid-element.component';

describe('BidElementComponent', () => {
  let component: BidElementComponent;
  let fixture: ComponentFixture<BidElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
