import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrosService } from 'src/app/registros.service';

@Component({
  selector: 'app-historico-registro',
  templateUrl: './historico-registro.component.html',
  styleUrls: ['./historico-registro.component.scss']
})
export class HistoricoRegistroComponent implements OnInit {

  id: any;
  registros: any;

  constructor(private route: ActivatedRoute, private registrosService: RegistrosService) { 
    
    // this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    this.registros = this.registrosService.registros;
  }

}
