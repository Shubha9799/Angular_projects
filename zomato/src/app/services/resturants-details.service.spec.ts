import { TestBed } from '@angular/core/testing';

import { ResturantsDetailsService } from './resturants-details.service';

describe('ResturantsDetailsService', () => {
  let service: ResturantsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
