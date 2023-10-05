import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<boolean> | boolean{

      if(localStorage.getItem('user')){
        return true;
      }

      this.router.navigate(['/login'])
      
      return false
    

  }

}
