import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  sendded: boolean = false;

  errorMessenge!: string;



  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.forgotPasswordResponse.subscribe(data=>{

      console.log(data);
      
      if(data === "email-sendded"){
        this.sendded = true
        this.errorMessenge = '';
      }else{
        this.sendded = false
        this.errorMessenge = data;
      }


      
    })
  }

  onSubmit(email: string){
    this.firebaseService.forgotPassword(email)
  }



}
