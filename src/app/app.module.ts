import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { DataTableModule, InputMaskModule, InputTextModule, 
         ButtonModule, MenuModule, CalendarModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { TipoContratoComponent } from './tipo-contrato/tipo-contrato.component'
import { TipoContratoService } from './tipo-contrato.service';
import { ContratoComponent } from './contrato/contrato.component';
import { NotaFiscalComponent } from './nota-fiscal/nota-fiscal.component';
import { rotas } from './app.rotas';
import { NotaFiscalService } from './nota-fiscal/nota-fiscal-service';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    TipoContratoComponent,
    ContratoComponent,
    NotaFiscalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    rotas,
    CurrencyMaskModule,
    
    
    DataTableModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    CalendarModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [
    TipoContratoService,
    NotaFiscalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
