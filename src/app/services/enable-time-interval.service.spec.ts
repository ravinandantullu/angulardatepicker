import { TestBed, inject } from '@angular/core/testing';

import { EnableTimeIntervalService } from './enable-time-interval.service';

describe('EnableTimeIntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnableTimeIntervalService]
    });
  });

  it('should ...', inject([EnableTimeIntervalService], (service: EnableTimeIntervalService) => {
    expect(service).toBeTruthy();
  }));
});
