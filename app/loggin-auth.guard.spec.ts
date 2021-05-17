import { TestBed } from '@angular/core/testing';

import { LogginAuthGuard } from './loggin-auth.guard';

describe('LogginAuthGuard', () => {
  let guard: LogginAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogginAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
