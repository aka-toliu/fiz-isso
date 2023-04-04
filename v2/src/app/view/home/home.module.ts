import { NovoRegistroComponent } from './novo-registro/novo-registro.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesRegistroComponent } from './detalhes-registro/detalhes-registro.component';



@NgModule({
  declarations: [
    NovoRegistroComponent,
    DetalhesRegistroComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NovoRegistroComponent,
    DetalhesRegistroComponent

  ]
})
export class HomeModule { }
