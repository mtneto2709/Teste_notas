import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NotaFiscalService {

    notaFiscalUrl = 'http://localhost:8080/notafiscal';

    constructor(private http: HttpClient) {}

    listar() {
        return this.http.get<any[]>(this.notaFiscalUrl);
    }

    incluir(notaFiscal: any) {
        return this.http.post(this.notaFiscalUrl, notaFiscal);
    }

    carregaDados(){
        return this.http.get(this.notaFiscalUrl);
    } 


}