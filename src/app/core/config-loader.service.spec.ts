import { TestBed } from '@angular/core/testing';

import { ConfigLoaderService } from './config-loader.service';

describe('ConfigLoaderPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigLoaderService = TestBed.get(ConfigLoaderService);
    expect(service).toBeTruthy();
  });
});
