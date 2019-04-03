import { TestBed } from '@angular/core/testing';

import { ConfigLoaderService } from './config-loader.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ComponentResolver } from './component-resolver.service';

describe('ConfigLoaderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ComponentResolver,
          useValue: new ComponentResolver({})
        }
      ]
    })
  );

  it('should be created', () => {
    const service: ConfigLoaderService = TestBed.get(ConfigLoaderService);
    expect(service).toBeTruthy();
  });
});
