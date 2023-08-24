import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.scss']
})
export class CardRegistroComponent implements OnInit {

  @Input() public titulo!: string;
  @Input() public icone!: string;
  @Input() public cor!: string;
  @Input() public status!: string;
  @Input() public periodo!: string;
  @Input() public horario!: string;
  @Input() public repeticao!: string;
  @Input() public historico!: any;
  @Input() public key!: string;

  selected: boolean = false;
  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;
  last: boolean = false;

  historicoDB: any = [];





  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {


  }

  onChangeStatus(status: string, event: any){


 
    // if(this.selected){
      const registro = {
        cor: this.cor,
        icone: this.icone,
        status: status,
        titulo: this.titulo,
        repeticao: this.repeticao,

        
        
      }
  
      const historico = {
  
        status: status,
        horario: this.horario,
        cor: this.cor,
        icone: this.icone,
        titulo: this.titulo,
        repeticao: this.repeticao,
        dataCriacao: Date.now()
  
      }

      
      

      
      if(status === 'fiz'){
        event.parentNode.classList.add('btn-anim--fiz')
      }

      if(status === 'vish'){
        event.parentNode.classList.add('btn-anim--vish')
      }

      setTimeout(() => {
        this.firebaseService.update(this.userID, registro, this.key);
        this.firebaseService.insertHistorico(this.userID, historico, this.key);
      }, 600);
      
    // }
      
  }

}
