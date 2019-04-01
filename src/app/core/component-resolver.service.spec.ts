import { TestBed } from '@angular/core/testing';

import { ComponentResolver } from './component-resolver.service';

describe('ComponentResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentResolver = TestBed.get(ComponentResolver);
    expect(service).toBeTruthy();
  });
});
