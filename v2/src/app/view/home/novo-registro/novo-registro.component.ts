import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-registro',
  templateUrl: './novo-registro.component.html',
  styleUrls: ['./novo-registro.component.scss']
})
export class NovoRegistroComponent implements OnInit {

  icones = [
    'check',
    'cat',
    'bag',
    'desktop',
    'tshirt',
    'pill',
    'calendar',
    'charge',
    'book',
    'dialog'
  ]

  cores = [
    'yellow',
    'blue',
    'red',
    'green',
    'purple'
  ]

  formRegistro!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formRegistro = this.formBuilder.group({
      titulo: [null],
      icone: ['check'],
      cor: ['yellow'],
      repeticao: ['diaria'],
      horario: ['00:00'],
      status: ['waiting'],
      historico: [[]],
    })
    
  }

  onSubmit(){
    console.log(this.formRegistro.value);
    
  }

}
