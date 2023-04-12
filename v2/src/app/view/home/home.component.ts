import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registros = [
    {
      titulo: "Teste",
      icone: "default",
      cor: "blue",
      status: null,
      periodo: "diario",
      horario: "09:00",
      historico: [
        {
          titulo: "Teste",
          icone: "default",
          cor: "blue",
          data: Date.now()
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
