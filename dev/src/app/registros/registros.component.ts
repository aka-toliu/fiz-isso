import { RegistrosService } from './../registros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  

  criarRegistro: boolean = false;

  registros: any;

  btnSelected: boolean = false;

  constructor(private registrosService: RegistrosService) { 
  }

  ngOnInit(): void {

    this.registros = this.registrosService.registros;
    // this.openCriarRegistro = this.registrosService.criarRegistro;

  }

  closeCriarRegistro(){
    this.criarRegistro = true
    console.log("mudou");
    
    
  }
}
