import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-historico-geral',
  templateUrl: './historico-geral.component.html',
  styleUrls: ['./historico-geral.component.scss']
})
export class HistoricoGeralComponent implements OnInit {
  historicoGeral: any;

  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.historicoGeral = this.registrosService.historicoGeral;
  }

}
