import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

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
  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;

  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

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

  // onSubmit(){
  //   console.log(this.formRegistro.value);
    
  // }

  onSubmit(){
    this.firebaseService.insert(this.userID, this.formRegistro.value)
  }

}
