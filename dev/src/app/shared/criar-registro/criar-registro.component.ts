import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/registros.service';


@Component({
  selector: 'app-criar-registro',
  templateUrl: './criar-registro.component.html',
  styleUrls: ['./criar-registro.component.scss']
})
export class CriarRegistroComponent implements OnInit {

  registros: any;

  newDate: any = new Date;
  // newDay = this.newDate.getDay();
  // newYear = this.newDate.getFullYear();
  // newMonth = this.newDate.getMonth();

  btnCorSelected: string = '';

  registrosSet: any = {
    colors: ['yellow', 'pink', 'blue', 'green', 'red'],
    icons: ['check', 'light', 'cat', 'pill', 'bag', 'money', 'tshirt', 'user', 'dialog', 'plus-cicle', 'desktop', 'mobile', 'calendar', 'document', 'charge'],
    frequencia: ['uma vez', 'diaria', 'semanal', 'mensal']
  }
  
  novoRegistro: any = {
    
      id: 0,
      titulo: "",
      icone: "check",
      cor: "yellow",
      data: this.newDate,
      frequencia: "diaria",
      status: "created",
      selected: false,
      complete: false
    
  }

  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.registros = this.registrosService.registros;
    this.btnCorSelected = this.novoRegistro.cor;
  }

  createRegistro(){

    this.novoRegistro.id = this.registros.length;
    

    if (this.novoRegistro.titulo == '') {
      this.novoRegistro.titulo = 'Novo registro';
    }

    this.registros.push(this.novoRegistro);

  }


}
