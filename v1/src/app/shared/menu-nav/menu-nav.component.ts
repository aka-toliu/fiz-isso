import { FirebaseService } from './../../firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {

  btnSelected: string = 'home';

  logged: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {

    this.logged = this.firebaseService.isLogged.subscribe(
      data => {
          this.logged = data;
      }
    )
  }

}
