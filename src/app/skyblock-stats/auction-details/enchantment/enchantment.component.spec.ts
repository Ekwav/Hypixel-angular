import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantmentComponent } from './enchantment.component';

describe('EnchantmentComponent', () => {
  let component: EnchantmentComponent;
  let fixture: ComponentFixture<EnchantmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchantmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
