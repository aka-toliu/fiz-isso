import { FirebaseService } from './../../firebase.service';
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
  newMonth = this.newDate.getMonth();
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
      dataCriacao: this.newDay + "/" + (this.newMonth + 1) + "/" + this.newYear,
      horario: '---',
      proximaData: '---',
      frequencia: "---",
      status: "waiting",
      selected: false,
      options: false,
      locked: false,
      historico: []
    
  }

  constructor(private registrosService: RegistrosService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.registros = this.registrosService.registros;
    this.btnCorSelected = this.novoRegistro.cor;
  }

  onSubmit(){
    this.firebaseService.insert(this.novoRegistro)
  }

  createRegistro(){

    // Insere ID, frequencia e horario no novo registro
    this.novoRegistro.id = this.registros.length;
    this.novoRegistro.frequencia = this.selectedFrequencia;
    this.novoRegistro.horario = this.selectedHorario;





    this.novoRegistro.proximaData = new Date().toString();
    
 

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
