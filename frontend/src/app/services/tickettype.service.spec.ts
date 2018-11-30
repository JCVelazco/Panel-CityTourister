import { TestBed } from '@angular/core/testing';

import { TicketTypeService } from './tickettype.service';

describe('TickettypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketTypeService = TestBed.get(TicketTypeService);
    expect(service).toBeTruthy();
  });
});
