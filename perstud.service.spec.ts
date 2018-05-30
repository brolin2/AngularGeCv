import { TestBed, inject } from '@angular/core/testing';

import { PerstudService } from './perstud.service';

describe('PerstudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerstudService]
    });
  });

  it('should be created', inject([PerstudService], (service: PerstudService) => {
    expect(service).toBeTruthy();
  }));
});
