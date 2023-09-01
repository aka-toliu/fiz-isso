import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detalhes-registro',
  templateUrl: './detalhes-registro.component.html',
  styleUrls: ['./detalhes-registro.component.scss']
})
export class DetalhesRegistroComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private firebaseService: FirebaseService
    ) { }

  id: any;
  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;

  tab: string = 'registros';

  modalDelete: boolean = false;

  registro: any;
  historicoDB!: any;

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getDeatalhes();
        this.getHistorico();
      
      }
    );


  }

  getHistorico(){
    this.firebaseService.getHistorico(this.userID, this.id).subscribe(
      data => { 
        console.log(data);
        this.historicoDB = data;
        this.historicoDB = Object.values(this.historicoDB);
      }
    )
    }



  getDeatalhes(){
    this.firebaseService.getSingle(this.userID, this.id).subscribe(
      data => { 
        console.log(data);
        this.registro = data;
      }
    )
  }

  onDelete(){
      this.firebaseService.delete(this.userID, this.id)
  }

}
