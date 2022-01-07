import { TestBed } from '@angular/core/testing';

import { JsonReformatterService } from './json-reformatter.service';

describe('JsonReformatterService', () => {
  let service: JsonReformatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonReformatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
