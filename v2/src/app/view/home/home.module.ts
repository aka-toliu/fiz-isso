import { HistoricoRegistroComponent } from './historico-registro/historico-registro.component';
import { NovoRegistroComponent } from './novo-registro/novo-registro.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NovoRegistroComponent,
    HistoricoRegistroComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NovoRegistroComponent,
    HistoricoRegistroComponent

  ]
})
export class HomeModule { }
