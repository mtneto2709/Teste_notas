import { Component, OnInit } from '@angular/core';
import { NotaFiscalService } from './nota-fiscal-service';
import { FormControl } from '@angular/forms';
import { Subscriber } from 'rxjs/Subscriber';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.css']
})
export class NotaFiscalComponent implements OnInit {

  itens = [];
  itemEditar: any = {};


  constructor(private notaFiscalService: NotaFiscalService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.notaFiscalService.listar().subscribe(dados => this.itens = dados);
  }

  incluir(frm: FormControl) {
    this.notaFiscalService.incluir(this.itemEditar).subscribe(() => {
      frm.reset();
      this.buscar();
    });
  }

  carregaDados(itemClicado) {
    this.itemEditar = Object.assign({}, itemClicado);
  }
}
