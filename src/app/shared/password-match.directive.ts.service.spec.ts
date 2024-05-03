import { TestBed } from '@angular/core/testing';

import { PasswordMatchDirectiveTsService } from './password-match.directive';

describe('PasswordMatchDirectiveTsService', () => {
  let service: PasswordMatchDirectiveTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordMatchDirectiveTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
