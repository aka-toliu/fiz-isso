import { FirebaseService } from './../firebase.service';
import { RegistrosService } from 'src/app/registros.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  newDate: any = new Date;
  newDay = this.newDate.getDate();
  newYear = this.newDate.getFullYear();
  newMonth = this.newDate.getMonth() + 1;
  newHours = this.newDate.getHours();
  newMinutes = this.newDate.getMinutes();

  registrosDB: any;


  criarRegistro: boolean = false;

  registros: any;
  historicoGeral: any;

  teste = {
    id: 123,
    nome: 'Teste',
    tipo: 'X'
  }


  // btnSelected: boolean = false;
  // optionSelected: boolean = false;



  

  constructor(private registrosService: RegistrosService, private db: AngularFireDatabase, private firebaseService: FirebaseService) {
    
  }

  ngOnInit(): void {

    // this.registrosDB = this.db.list('teste').valueChanges();

    this.getAll();

    

    this.registrosService.getFromStorage();
    this.registros = this.registrosService.registros;
    this.historicoGeral = this.registrosService.historicoGeral;

    this.registrosService.updateIds();
    this.registrosService.validacaoData();

    setInterval(() => {
      this.registrosService.validacaoData();
    }, 10000);

  // console.log('return: ' + this.registrosService.calcDate('diaria', '19:00'));


  }

  

  setHistorico(num: any) {

    if (this.registros[num].complete != true) {
      let novoHistoricoRegistro = {
        data: this.newDay + "/" + this.newMonth + "/" + this.newYear,
        horario: this.newHours + 'h' + this.newMinutes,
        status: this.registros[num].status
      }
  
      let novoHistoricoGeral = {
        titulo: this.registros[num].titulo,
        data: this.newDay + "/" + this.newMonth + "/" + this.newYear,
        horario: this.newHours + 'h' + this.newMinutes,
        status: this.registros[num].status,
        cor: this.registros[num].cor,
        icone: this.registros[num].icone
      }
  
      this.registros[num].historico.push(novoHistoricoRegistro);
      this.historicoGeral.push(novoHistoricoGeral);
    }

    if (this.registros[num].frequencia == 'diaria') {
      this.registros[num].proximaData = this.registrosService.addDays(1).toString();
    }

    if (this.registros[num].frequencia == 'semanal') {
      this.registros[num].proximaData = this.registrosService.addDays(7).toString();
    }

    this.registros[num].locked = true;
    this.registros[num].complete = true;

    this.registrosService.saveToStorage();

  }


  desfazerRegistro(num: any){

    if (this.registros[num].complete == true) {
      this.registros[num].status = "waiting";
      this.registros[num].selected = false;
      this.registros[num].complete = false;
      this.registros[num].options = false;
      this.registros[num].historico.pop();
      this.registrosService.saveToStorage();
    }

  }

  excluirRegistro(num: any){

    let indexRegistro = this.registros.indexOf(this.registros[num]);

    if (num > 0) {
      this.registros.splice(indexRegistro, 1)
      
    }
    else{
      this.registros.shift();
    }

    this.registrosService.updateIds();

    this.registrosService.saveToStorage();
  }

  getAll(){
    this.registrosDB = this.firebaseService.getAll();
  }


}
