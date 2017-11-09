import { TestBed, inject } from '@angular/core/testing';

import { TrailInfoService } from './trail-info.service';

describe('TrailInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailInfoService]
    });
  });

  it('should ...', inject([TrailInfoService], (service: TrailInfoService) => {
    expect(service).toBeTruthy();
  }));
});
