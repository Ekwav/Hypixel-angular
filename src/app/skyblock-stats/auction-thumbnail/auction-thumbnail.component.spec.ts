import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionThumbnailComponent } from './auction-thumbnail.component';

describe('AuctionThumbnailComponent', () => {
  let component: AuctionThumbnailComponent;
  let fixture: ComponentFixture<AuctionThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
