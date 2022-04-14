import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegFoodCardComponent } from './non-veg-food-card.component';

describe('NonVegFoodCardComponent', () => {
  let component: NonVegFoodCardComponent;
  let fixture: ComponentFixture<NonVegFoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegFoodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegFoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
