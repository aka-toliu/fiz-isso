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

  title: number = 500;

  random: any;
  

  constructor(private firebaseService: FirebaseService, private router: Router) { }



  ngOnInit(): void {

    if (localStorage.getItem('user')) {

      this.router.navigate(['/home'])
      
    }else{
      localStorage.removeItem('user');
    }

    
      setTimeout(() => {
        this.randomizer();
        this.random = setInterval(()=>this.randomizer(), 8000);
      }, 2000);
   

   
    
  }

  async onLogin(email: string, senha: string){
    
    await this.firebaseService.signin(email, senha)
    if(this.firebaseService.isLogged){
      this.isSingedIn = true     
    }
  }

  randomizer(){
    
    this.title = Math.floor(Math.random() * 6);
  }



}
