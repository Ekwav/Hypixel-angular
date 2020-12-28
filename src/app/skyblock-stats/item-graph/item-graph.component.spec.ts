import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGraphComponent } from './item-graph.component';

describe('ItemGraphComponent', () => {
  let component: ItemGraphComponent;
  let fixture: ComponentFixture<ItemGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
