import { TestBed } from '@angular/core/testing';

import { CoflnetClientService } from './coflnet-client.service';

describe('CoflnetClientService', () => {
  let service: CoflnetClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoflnetClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
