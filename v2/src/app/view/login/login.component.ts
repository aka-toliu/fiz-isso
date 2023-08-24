import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSingedIn = false;
  

  constructor(private firebaseService: FirebaseService, private router: Router) { }



  ngOnInit(): void {

    if (localStorage.getItem('user')) {

      this.router.navigate(['/home'])
      
    }else{
      localStorage.removeItem('user');
    }
    
  }

  async onLogin(email: string, senha: string){
    
    await this.firebaseService.signin(email, senha)
    if(this.firebaseService.isLogged){
      this.isSingedIn = true     
    }
  }



}
