import { TestBed } from '@angular/core/testing';

import { HtmlLoaderService } from './html-loader.service';

describe('HtmlLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlLoaderService = TestBed.get(HtmlLoaderService);
    expect(service).toBeTruthy();
  });
});
