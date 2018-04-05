import { TestBed, inject } from '@angular/core/testing';

import { TipoContratoService } from './tipo-contrato.service';

describe('TipoContratoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoContratoService]
    });
  });

  it('should be created', inject([TipoContratoService], (service: TipoContratoService) => {
    expect(service).toBeTruthy();
  }));
});
