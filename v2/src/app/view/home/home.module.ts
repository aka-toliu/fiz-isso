import { NovoRegistroComponent } from './novo-registro/novo-registro.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesRegistroComponent } from './detalhes-registro/detalhes-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NovoRegistroComponent,
    DetalhesRegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  exports: [
    NovoRegistroComponent,
    DetalhesRegistroComponent

  ]
})
export class HomeModule { }
