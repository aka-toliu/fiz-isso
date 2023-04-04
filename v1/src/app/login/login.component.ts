import { FirebaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSingedIn = false;

  constructor(private firebaseService: FirebaseService, private router: Router) { 
    if(localStorage.getItem('user') !== null){
      this.isSingedIn = true
    }else{
      this.isSingedIn = false
    }
  }

  ngOnInit(): void {
    // if(localStorage.getItem('user')){
    //   this.router.navigate(['/home']);
    // }
  }

  async onSingup(email: string, senha: string){
    await this.firebaseService.singUp(email, senha)
    if(this.firebaseService.isLoggedIn){
      this.isSingedIn = true
    }
  }

  async onSingin(email: string, senha: string){
    await this.firebaseService.singIn(email, senha)
    if(this.firebaseService.isLoggedIn){
      this.isSingedIn = true
    }
  }



}
