import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {




  registros: any = [

    // {
    //   id: 0,
    //   titulo: "Apagar as luzes",
    //   icone: "light",
    //   cor: "yellow",
    //   data: new Date(2003, 9, 10),
    //   proximaData: '10/9/2022',
    //   horario: '9h00',
    //   frequencia: "diaria",
    //   status: "waiting",
    //   selected: false,
    //   options: false,
    //   complete: false,
    //   historico: [
    //     {
    //       data: "10/10/2022",
    //       horario: "9h00",
    //       status: "check",
    //     },
    //     {
    //       data: "11/10/2022",
    //       horario: "9h02",
    //       status: "vish",
    //     },
    //     {
    //       data: "12/10/2022",
    //       horario: "9h01",
    //       status: "check",
    //     }
    //   ]

    // },
    // {
    //   id: 1,
    //   titulo: "Colocar comida pro xane",
    //   icone: "cat",
    //   cor: "blue",
    //   data: new Date(2003, 9, 10),
    //   frequencia: "diaria",
    //   proximaData: '10/9/2022',
    //   horario: '9h00',
    //   status: "waiting",
    //   selected: false,
    //   options: false,
    //   complete: false,
    //   historico: []
    // },
    // {
    //   id: 2,
    //   titulo: "Colocar água pro xane",
    //   icone: "cat",
    //   cor: "blue",
    //   data: new Date(2003, 9, 10),
    //   frequencia: "diaria",
    //   proximaData: '13/9/2022',
    //   horario: '18:03',
    //   status: "check",
    //   selected: false,
    //   options: false,
    //   complete: true,
    //   historico: [
    //     {
    //       data: "10-10-2022",
    //       horario: "9h00",
    //       status: "check",
    //     },
    //     {
    //       data: "11-10-2022",
    //       horario: "9h02",
    //       status: "check",
    //     },
    //     {
    //       data: "12-10-2022",
    //       horario: "9h01",
    //       status: "vish",
    //     }
    //   ]
    // },
    // {
    //   id: 3,
    //   titulo: "Tomei o remédio",
    //   icone: "pill",
    //   cor: "pink",
    //   data: new Date(2003, 9, 10),
    //   frequencia: "diaria",
    //   proximaData: '13/9/2022',
    //   horario: '16:43',
    //   status: "waiting",
    //   selected: false,
    //   options: false,
    //   complete: false,
    //   historico: [
    //     {
    //       data: "10/10/2022",
    //       horario: "9h00",
    //       status: "check",
    //     },
    //     {
    //       data: "11/10/2022",
    //       horario: "9h02",
    //       status: "check",
    //     },
    //     {
    //       data: "12/10/2022",
    //       horario: "9h01",
    //       status: "check",
    //     }
    //   ]
    // }
  ]


  getFromStorage() {
    let registrosStorage: any = window.localStorage.getItem('registros');

    let newRegistros = JSON.parse(registrosStorage);

    if (registrosStorage != null) {
      this.registros = newRegistros;
    } else {
      this.saveToStorage();
    }

  }

  saveToStorage() {
    window.localStorage.setItem('registros', JSON.stringify(this.registros));
  }


  historicoGeral = [

    {
      titulo: "Apagar as luzes",
      icone: "light",
      cor: "yellow",
      data: "12/10/2022",
      horario: "9h01",
      status: "vish",
    },
    {
      titulo: "Dar banho no xane",
      icone: "cat",
      cor: "red",
      data: "12/10/2022",
      horario: "9h01",
      status: "check",
    },
    {
      titulo: "Tomar remédio X",
      icone: "pill",
      cor: "blue",
      data: "12/10/2022",
      horario: "9h01",
      status: "check",
    }
  ]



  updateIds() {
    for (let i = 0; i < this.registros.length; i++) {
      this.registros[i].id = i;
      console.log(this.registros[i].id);

    }
  }

  validacaoData() {

    let newDate: any = new Date;
    let newDay = newDate.getDate();
    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;
    let newHours = newDate.getHours() > 9 ? newDate.getHours() : "0" + newDate.getHours();
    let newMinutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : "0" + newDate.getMinutes();

    let actualDate: any = newDay + "/" + newMonth + "/" + newYear;
    let actualHour: any = newHours + ':' + newMinutes;

    
  
    for (let i = 0; i < this.registros.length; i++) {

      if (this.registros[i].nextDateTime >= Date.parse(newDate)) {
        console.log(this.registros[i].id + ' - true');
      }else{
        console.log(this.registros[i].id + ' - false');
      }

    }
  }







  constructor() { }
}
