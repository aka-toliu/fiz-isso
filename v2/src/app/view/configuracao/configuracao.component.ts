import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  theme: string = 'light';

  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;

  userData: any = JSON.parse(this.user)

  userInfo: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  logout(){
    this.firebaseService.logout();
  }

  getUserInfo(){
    this.firebaseService.getUserInfo(this.userID).subscribe(data=>{
      this.userInfo = data[0];
      
    })
  }

}
