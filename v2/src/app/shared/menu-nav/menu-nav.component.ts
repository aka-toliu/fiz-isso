import { FirebaseService } from '../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {

  logged: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {

    if(localStorage.getItem('user')){
      this.firebaseService.isLogged.emit(true)
      this.logged = true;
    }else{
      this.firebaseService.isLogged.emit(false)
      this.logged = false;
    }
    
    this.firebaseService.isLogged.subscribe(
      data => {
          this.logged = data;          
      }, (error => {
        console.log(error);
        
      })
    )
  }

}
