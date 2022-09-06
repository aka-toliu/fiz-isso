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
        status: "created",
        selected: false,
        complete: false,
        historico: [
          {
            data: "10-10-2022",
            horario: "9h00",
            status: "checked",
          },
          {
            data: "11-10-2022",
            horario: "9h02",
            status: "checked",
          },
          {
            data: "12-10-2022",
            horario: "9h01",
            status: "checked",
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
        status: "created",
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
            status: "checked",
          },
          {
            data: "11-10-2022",
            horario: "9h02",
            status: "checked",
          },
          {
            data: "12-10-2022",
            horario: "9h01",
            status: "checked",
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
        status: "created",
        selected: false,
        complete: false,
        historico: [
          {
            data: "10-10-2022",
            horario: "9h00",
            status: "checked",
          },
          {
            data: "11-10-2022",
            horario: "9h02",
            status: "checked",
          },
          {
            data: "12-10-2022",
            horario: "9h01",
            status: "checked",
          }
        ]
      }
    ]


    historicoGeral = [
      
      {
        titulo: "Apagar as luzes",
        data: "12-10-2022",
        horario: "9h01",
        status: "checked",
      },
      {
        titulo: "Apagar as luzes",
        data: "12-10-2022",
        horario: "9h01",
        status: "checked",
      },
      {
        titulo: "Apagar as luzes",
        data: "12-10-2022",
        horario: "9h01",
        status: "checked",
      }
  ]
  

  

  constructor() { }
}
