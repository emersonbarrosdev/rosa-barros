import { TestBed } from '@angular/core/testing';

import { SendMailService } from './send-mail.service';

describe('SendMail', () => {
  let service: SendMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
