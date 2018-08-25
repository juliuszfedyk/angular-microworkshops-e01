import { TestBed, async, inject } from '@angular/core/testing';

import { BoxerGuard } from './boxer.guard';

describe('BoxerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxerGuard]
    });
  });

  it('should ...', inject([BoxerGuard], (guard: BoxerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
