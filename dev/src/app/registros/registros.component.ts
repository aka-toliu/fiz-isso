import { RegistrosService } from './../registros.service';
import { Component, OnInit } from '@angular/core';


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


  criarRegistro: boolean = false;

  registros: any;
  historicoGeral: any;

  // btnSelected: boolean = false;
  // optionSelected: boolean = false;

  constructor(private registrosService: RegistrosService) {
  }

  ngOnInit(): void {

    this.registros = this.registrosService.registros;
    this.historicoGeral = this.registrosService.historicoGeral;
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

    this.registros[num].complete = true

  }

  desfazerRegistro(num: any){

    if (this.registros[num].complete == true) {
      this.registros[num].status = "waiting";
      this.registros[num].selected = false;
      this.registros[num].complete = false;
      this.registros[num].options = false;
      this.registros[num].historico.pop();
    }

  }

  excluirRegistro(num: any){
    for (let i = 0; i < this.registros.length; i++) {
      if (this.registros[i].id == num) {

        // this.registros.splice(this.registros.indexOf(this.registros[i]), num)
        // this.registros[i].status = 'deleted'
        
      }
    }
  }

}
