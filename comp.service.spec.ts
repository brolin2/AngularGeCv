import { TestBed, inject } from '@angular/core/testing';

import { CompService } from './comp.service';

describe('CompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompService]
    });
  });

  it('should be created', inject([CompService], (service: CompService) => {
    expect(service).toBeTruthy();
  }));
});
