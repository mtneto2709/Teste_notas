import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TipoContratoComponent } from './tipo-contrato/tipo-contrato.component'
import { NotaFiscalComponent } from "./nota-fiscal/nota-fiscal.component";
import { ContratoComponent } from "./contrato/contrato.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

const app_routes: Routes = [

    { path: '', component: AppComponent },
    { path: 'tipocontrato', component: TipoContratoComponent },
    { path: 'contrato', component: ContratoComponent },
    { path: 'notafiscal', component: NotaFiscalComponent },
];

export const rotas: ModuleWithProviders = RouterModule.forRoot(app_routes);