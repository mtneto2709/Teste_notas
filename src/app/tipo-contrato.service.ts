import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable()
export class TipoContratoService {

  tipoContratoUrl = 'http://localhost:8080/tipocontrato';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.tipoContratoUrl);
  }

  incluir(tipoContrato: any) {
    return this.http.post(this.tipoContratoUrl, tipoContrato)
  }

  carregaDados() {
    return this.http.get(this.tipoContratoUrl)
    
  }
}
