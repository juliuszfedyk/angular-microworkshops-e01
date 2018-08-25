import { TestBed, async, inject } from '@angular/core/testing';

import { HoundGuard } from './hound.guard';

describe('HoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoundGuard]
    });
  });

  it('should ...', inject([HoundGuard], (guard: HoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
