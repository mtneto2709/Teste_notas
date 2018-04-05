import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TipoContratoService } from './../tipo-contrato.service'; 
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-tipo-contrato',
  templateUrl: './tipo-contrato.component.html',
  styleUrls: ['./tipo-contrato.component.css']
})
export class TipoContratoComponent implements OnInit {

  itens = [];
  itemEditar: any = {};

  constructor(private tipoContratoService: TipoContratoService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.tipoContratoService.listar().subscribe(dados => this.itens = dados);
  }

  incluir(frm: FormControl) {
    this.tipoContratoService.incluir(this.itemEditar).subscribe(() => {
      frm.reset();
      this.buscar();
    });

    }
  
  carregaDados(itemClicado: any) {
    this.itemEditar = Object.assign({}, itemClicado);
  }
  
      
}
