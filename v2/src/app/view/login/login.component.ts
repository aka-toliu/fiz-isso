import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSingedIn = false;
  

  constructor(private firebaseService: FirebaseService) { }



  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSingedIn = true
    }else{
      this.isSingedIn = false
    }
  }

  async onLogin(email: string, senha: string){
    
    await this.firebaseService.signin(email, senha)
    if(this.firebaseService.isLogged){
      this.isSingedIn = true     
    }
  }



}
