import { TestBed } from '@angular/core/testing';

import { StartupService } from './startup.service';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupService = TestBed.get(StartupService);
    expect(service).toBeTruthy();
  });
});
