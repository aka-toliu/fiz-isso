import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

 registros: any =  [
    
      {
        id: 0,
        titulo: "Apagar as luzes",
        icone: "light",
        cor: "yellow",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "waiting",
        selected: false,
        complete: false,
        historico: [
          {
            data: "10/10/2022",
            horario: "9h00",
            status: "check",
          },
          {
            data: "11/10/2022",
            horario: "9h02",
            status: "vish",
          },
          {
            data: "12/10/2022",
            horario: "9h01",
            status: "check",
          }
        ]

      },
      {
        id: 1,
        titulo: "Colocar comida pro xane",
        icone: "cat",
        cor: "blue",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "waiting",
        selected: false,
        complete: true,
        historico: []
      },
      {
        id: 2,
        titulo: "Colocar água pro xane",
        icone: "cat",
        cor: "blue",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "check",
        selected: false,
        complete: false,
        historico: [
          {
            data: "10-10-2022",
            horario: "9h00",
            status: "check",
          },
          {
            data: "11-10-2022",
            horario: "9h02",
            status: "check",
          },
          {
            data: "12-10-2022",
            horario: "9h01",
            status: "vish",
          }
        ]
      },
      {
        id: 3,
        titulo: "Tomei o remédio",
        icone: "pill",
        cor: "pink",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "waiting",
        selected: false,
        complete: false,
        historico: [
          {
            data: "10/10/2022",
            horario: "9h00",
            status: "check",
          },
          {
            data: "11/10/2022",
            horario: "9h02",
            status: "check",
          },
          {
            data: "12/10/2022",
            horario: "9h01",
            status: "check",
          }
        ]
      }
    ]


    historicoGeral = [
      
      {
        titulo: "Apagar as luzes",
        data: "12/10/2022",
        horario: "9h01",
        status: "vish",
      },
      {
        titulo: "Apagar as luzes",
        data: "12/10/2022",
        horario: "9h01",
        status: "check",
      },
      {
        titulo: "Apagar as luzes",
        data: "12/10/2022",
        horario: "9h01",
        status: "check",
      }
  ]
  

  

  constructor() { }
}