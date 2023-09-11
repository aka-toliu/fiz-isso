import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: [null],
      email: [null],
      dataNascimento: [null],
      senha: [null],
      tema: ['light'],
      
    })
  }

  onSubmit(){
    console.log(this.formCadastro.value);

    const userData = {
      nome: this.formCadastro.get('nome')?.value,
      dataNascimento: this.formCadastro.get('dataNascimento')?.value,

    }

    this.firebaseService.signup(
      this.formCadastro.get('email')?.value, this.formCadastro.get('senha')?.value, userData)
      .then(res=> {})
    
  }

}
