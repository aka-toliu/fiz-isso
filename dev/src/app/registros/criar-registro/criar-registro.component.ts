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
  now = Date.now();
  newDay = this.newDate.getDate();
  newYear = this.newDate.getFullYear();
  newMonth = this.newDate.getMonth() + 1;
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
      dataCriacao: this.newDay + "/" + this.newMonth + "/" + this.newYear,
      proximaData: '---',
      horario: '---',
      nextDateTime: '---',
      frequencia: "---",
      status: "waiting",
      selected: false,
      options: false,
      locked: false,
      historico: []
    
  }

  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.registros = this.registrosService.registros;
    this.btnCorSelected = this.novoRegistro.cor;
  }

  createRegistro(){

    // Insere ID, frequencia e horario no novo registro
    this.novoRegistro.id = this.registros.length;
    this.novoRegistro.frequencia = this.selectedFrequencia;
    this.novoRegistro.horario = this.selectedHorario;

    // Gera DateTime que servirá para para validação de data e horário
    let nextDate = this.registrosService.calcDate(this.selectedFrequencia, this.selectedHorario);
    let dateSplit = nextDate.split('-');
    let invertedDate = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];
  
    this.novoRegistro.nextDateTime = new Date(invertedDate + ' ' + this.selectedHorario).getTime();
    this.novoRegistro.proximaData = nextDate;

    // Tratamento para campo de título vazio
    if (this.novoRegistro.titulo == '') {
      this.novoRegistro.titulo = 'Novo registro ' + (this.registros.length + 1);
    }

    // 'post' do novo registro
    this.registros.push(this.novoRegistro);

    // Salva no localStorage
    this.registrosService.saveToStorage();

  }


}
