import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSingedIn = false;

  formLogin!: FormGroup;

  title: number = 500;

  random: any;
  

  constructor(private firebaseService: FirebaseService, private router: Router, private formBuilder: FormBuilder) { }



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
   

      this.formLogin = this.formBuilder.group({
        email: ['reginaldo@email.com', [Validators.required, Validators.email]],
        senha: ['asdqwe', Validators.required],
       
      })

   
    
  }

  async onLogin(email: string, senha: string){
    
    await this.firebaseService.signin(email, senha)
    .then((res)=>{
      
    }, error=>{

      if (error.code === "auth/user-not-found") {
        this.formLogin.controls['email'].setErrors({'not-found': true});
      }

      if (error.code === "auth/wrong-password") {
        this.formLogin.controls['senha'].setErrors({'wrong-password': true});
      }

      if (error.code === "auth/too-many-requests") {
        this.formLogin.controls['senha'].setErrors({'too-many-requests': true});
      }


      console.log(error.code);
      
      
      
    })

    if(this.firebaseService.isLogged){
      this.isSingedIn = true     
    }
  }

  loginGoogle(){
    this.firebaseService.googleSignIn();
    
   
  }

  randomizer(){
    let num = Math.floor(Math.random() * 6)
    
    if(num === this.title){
        this.randomizer();
    }else{
      this.title = num;
    }
  }



}
