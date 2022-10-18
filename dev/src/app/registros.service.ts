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
    let newSeconds = newDate.getSeconds() > 9 ? newDate.getMinutes() : "0" + newDate.getMinutes();

    // let date1 = new Date('2022-11-18 14:00');

    let dateNow = newYear + '-' + newMonth + '-' + newDay;
    let hourNow = newHours+ ':' + newMinutes;

    let now = new Date( dateNow + ' ' + hourNow);
    console.log('------------------------');
    
    
    for (let i = 0; i < this.registros.length; i++) {

      if (this.registros[i].nextDateTime <= now.getTime()) {
        console.log(i + ' --A-- ' + now.getTime());
      }else{
        console.log(i + ' --B-- ' + now.getTime());
      }
      

    }
  }

  convertDateTime(date: string, hour: string){
    let result = new Date(date + ' ' + hour);

    return result.getTime();
  }
  

  calcDate(frequencia: any, horario: any){



    console.log(this.convertDateTime('2022-11-18', '15:00'));
    
    let newDate: any = new Date;
    let newDay = newDate.getDate();
    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;
    let daysOfMonth = new Date(newYear, newMonth, 0).getDate();
    let newHours = newDate.getHours() > 9 ? newDate.getHours() : "0" + newDate.getHours();
    let newMinutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : "0" + newDate.getMinutes();

    

    let nowDate = newYear + '-' + newMonth + '-' + newDay;
    let nowHour = newHours+ ':' + newMinutes;

    let date1 = this.convertDateTime(nowDate, nowHour);


    let resultDate: any;

    // FREQUENCIA DIÁRIA

    if(frequencia === 'diaria' && newDay < daysOfMonth && newMonth < 12)
    {// [1] se não for ultimo dia do mês nem ultimo mês do ano
      if(date1 > this.convertDateTime(nowDate, horario) || horario == 'none'){
        resultDate = (newDay + 1) + "-" + newMonth + "-" + newYear;
      }else{
        resultDate = newDay + "-" + newMonth + "-" + newYear;
      }
    }

    else if(frequencia === 'diaria' && newDay == daysOfMonth && newMonth < 12)
    {// [2] se for ultimo dia do mês mas não ultimo mês do ano
      resultDate = 1 + "-" + (newMonth + 1) + "-" + newYear;
    }

    else if(frequencia === 'diaria' && newDay == daysOfMonth && newMonth == 12)
    {// [3] se for ultimo dia do mês e ultimo mês do ano 
      resultDate = 1 + "-" + 1 + "-" + (newYear + 1);
    }

    // --------------------------------------------------------------------------------

    // FREQUENCIA SEMANAL

    if(frequencia === 'semanal' && newDay < (daysOfMonth - 7) && newMonth < 12)
    {// [1] se não for ultima semana do mês nem ultimo mês do ano
      resultDate = (newDay + 7) + "-" + newMonth + "-" + newYear;
    }

    else if(frequencia === 'semanal' && newDay >= (daysOfMonth - 7) && newMonth < 12)
    {// [2] se for ultima semana do mês mas não ultimo mês do ano
      resultDate = (newDay + 7 - daysOfMonth) + "-" + (newMonth + 1) + "-" + newYear;
    }

    else if(frequencia === 'semanal' && newDay >= (daysOfMonth - 7) && newMonth == 12)
    {// [3] se for ultima semana do mês e ultimo mês do ano 
      resultDate = (newDay + 7 - daysOfMonth) + "-" + 1 + "-" + (newYear + 1);
    }
    
    

    return  resultDate;
    
    

  }

  
  





  constructor() { }
}
