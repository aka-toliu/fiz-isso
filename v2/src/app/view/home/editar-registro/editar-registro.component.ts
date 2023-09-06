import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.scss']
})
export class EditarRegistroComponent implements OnInit {

  id: any;
  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;
  registro: any;

  formRegistro!: FormGroup;

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
    'purple',
    'orange'
  ]

  constructor(    
    private route: ActivatedRoute, 
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getDeatalhes();
      }
    );

    this.formRegistro = this.formBuilder.group({
      titulo: [null],
      icone: [''],
      cor: [''],
      repeticao: [''],
      horario: [''],
      status: [''],
      proximoRegistro: [''],
      historico: [[]],
    })
  }

  getDeatalhes(){
    this.firebaseService.getSingle(this.userID, this.id).subscribe(
      data => { 
        console.log(data);
        this.registro = data;
        this.popularRegistro();
      }
    )
  }

  popularRegistro(){
    this.formRegistro.get(['titulo'])?.setValue(this.registro.titulo);
    this.formRegistro.get(['cor'])?.setValue(this.registro.cor);    
    this.formRegistro.get(['icone'])?.setValue(this.registro.icone);    
    this.formRegistro.get(['horario'])?.setValue(this.registro.horario);    
    this.formRegistro.get(['repeticao'])?.setValue(this.registro.repeticao);
    this.formRegistro.get(['historico'])?.setValue(this.registro.historico);    
    this.formRegistro.get(['status'])?.setValue(this.registro.status);    


  }

  onSubmit(){

    if (this.formRegistro.get(['titulo'])?.value === null ) {
      this.formRegistro.get(['titulo'])?.setValue('Sem título')
    }
    this.firebaseService.update(this.userID, this.formRegistro.value, this.id)

    this.firebaseService.isUpdated.subscribe(
      data => {
        this.router.navigate([`/registro/${this.id}`])
      }, (error => {
        console.log(error);
        
      })
    )
  }


}
