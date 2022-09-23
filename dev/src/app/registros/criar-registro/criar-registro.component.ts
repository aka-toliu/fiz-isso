import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/registros.service';


@Component({
  selector: 'app-criar-registro',
  templateUrl: './criar-registro.component.html',
  styleUrls: ['./criar-registro.component.scss']
})
export class CriarRegistroComponent implements OnInit {

  selectedIcon: any = 'check';
  selectedColor: any = 'yellow';
  selectedFrequencia: any = 'diaria';
  selectedHorario: any = '00:00';

  registros: any;

  newDate: any = new Date;
  newDay = this.newDate.getDate();
  // newDay = 31;
  newYear = this.newDate.getFullYear();
  newMonth = this.newDate.getMonth() + 1;
  // newMonth = 12;
  newHours = this.newDate.getHours();
  newMinutes = this.newDate.getMinutes();
  daysOfMonth = new Date(this.newYear, this.newMonth, 0).getDate();

  btnCorSelected: string = '';

  registrosSet: any = {
    colors: ['yellow', 'pink', 'blue', 'green', 'red'],
    icons: ['check', 'light', 'cat', 'pill', 'bag', 'money', 'tshirt', 'user', 'dialog', 'plus-cicle', 'desktop', 'mobile', 'calendar', 'document', 'charge'],
    frequencia: ['diaria', 'semanal', 'mensal', 'uma vez']
  }
  
  novoRegistro: any = {
    
      id: 0,
      titulo: "",
      icone: "check",
      cor: "yellow",
      data: this.newDay + "/" + this.newMonth + "/" + this.newYear,
      proximaData: '---',
      horario: '---',
      frequencia: "---",
      status: "waiting",
      selected: false,
      options: false,
      complete: false,
      historico: []
    
  }

  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.registros = this.registrosService.registros;
    this.btnCorSelected = this.novoRegistro.cor;
  }

  createRegistro(){

    this.novoRegistro.id = this.registros.length;
    this.novoRegistro.frequencia = this.selectedFrequencia;
    this.novoRegistro.horario = this.selectedHorario;

    let horarioSplit =  this.selectedHorario.split(':');

    if (this.selectedFrequencia == 'diaria' && this.newDay < this.daysOfMonth)
    {
      if (this.newHours > horarioSplit[0]) {
        this.novoRegistro.proximaData = (this.newDay + 1) + "/" + this.newMonth + "/" + this.newYear;
        console.log('diaria 1');
        // aumenta apenas 1 dia
      }else{
        this.novoRegistro.proximaData = (this.newDay) + "/" + this.newMonth + "/" + this.newYear;
      }

    } 
    else if(this.selectedFrequencia == 'diaria' && this.newDay == this.daysOfMonth && this.newMonth == 12)
    {
      if (this.newHours > horarioSplit[0]) {
      this.novoRegistro.proximaData = 1 + "/" + 1 + "/" + (this.newYear + 1);
      console.log('diaria 2');
      // aumenta  1 dia, 1 mês e 1 ano
      }else{
        this.novoRegistro.proximaData = this.newDay + "/" + 1 + "/" + (this.newYear + 1);
      }
    }
    else
    {
      if (this.newHours > horarioSplit[0]) {
      this.novoRegistro.proximaData = 1 + "/" + (this.newMonth + 1) + "/" + this.newYear;
      console.log('diaria 3');
      // aumenta 1 dia e 1 mês/
    }else{
      this.novoRegistro.proximaData = this.newDay + "/" + (this.newMonth + 1) + "/" + this.newYear;
    }
    }



    if (this.selectedFrequencia == 'semanal' && this.newDay < (this.daysOfMonth - 7)) 
    {
      this.novoRegistro.proximaData = this.newDay + 7 + "/" + this.newMonth + "/" + this.newYear;
      console.log('semanal 1');
      
    } 
    else if(this.selectedFrequencia == 'semanal' && this.newDay > (this.daysOfMonth - 7) && this.newMonth < 12)
    {
      this.novoRegistro.proximaData = (this.newDay + 7 - this.daysOfMonth) + "/" + (this.newMonth + 1) + "/" + this.newYear;
      console.log('semanal 2');
    }
    else if(this.selectedFrequencia == 'semanal' && this.newDay > (this.daysOfMonth - 7) && this.newMonth == 12)
    {
      this.novoRegistro.proximaData = (this.newDay + 7) - this.daysOfMonth + "/" + 1 + "/" + (this.newYear + 1);
      console.log('semanal 3');
    }



    if (this.selectedFrequencia == 'mensal') {
      this.novoRegistro.proximaData = this.newDay + "/" + (this.newMonth + 1) + "/" + this.newYear;
      
    }
    

    if (this.novoRegistro.titulo == '') {
      this.novoRegistro.titulo = 'Novo registro';
    }

    this.registros.push(this.novoRegistro);

    this.registrosService.saveToStorage();

  }


}
