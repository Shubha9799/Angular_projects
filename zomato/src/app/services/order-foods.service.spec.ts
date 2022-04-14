import { TestBed, async, inject } from '@angular/core/testing';
import { OrderFoodsService } from './order-foods.service';

describe('Service: OrderFoods', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderFoodsService]
    });
  });

  it('should ...', inject([OrderFoodsService], (service: OrderFoodsService) => {
    expect(service).toBeTruthy();
  }));
});
