import { TestBed } from '@angular/core/testing';

import { CelestrakService } from './celestrak.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CelestrakService', () => {
  let service: CelestrakService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CelestrakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
