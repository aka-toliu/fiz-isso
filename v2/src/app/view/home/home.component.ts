import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registrosDB: any;

  registros = [
    {
      titulo: "Teste",
      icone: "desktop",
      cor: "blue",
      status: null,
      periodo: "diario",
      horario: "09:00",
      historico: [
        {
          titulo: "Teste",
          icone: "default",
          cor: "blue",
          data: Date.now()
        }
      ]
    }
  ]

  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  logout(){
    this.firebaseService.logout();
  }

  getAll(){
    this.firebaseService.getAll(this.userID).subscribe(
      data => {
        this.registrosDB = data;
      }
    )
    
  }

}
