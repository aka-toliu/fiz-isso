import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrosService } from 'src/app/registros.service';

@Component({
  selector: 'app-historico-registro',
  templateUrl: './historico-registro.component.html',
  styleUrls: ['./historico-registro.component.scss']
})
export class HistoricoRegistroComponent implements OnInit {

  id: any;
  registros: any;
  registroAtual: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private registrosService: RegistrosService) { 
    
    // this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        // this.registroAtual = this.registrosService.getRegistro(params['id']);

        // if(this.registroAtual == null){
        //   this.router.navigate(['/registro-nao-encontrado']);
        // }
      }
    );

    this.registros = this.registrosService.registros;
  }

}
