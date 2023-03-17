import { Registro } from './models/registro';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  // user: any = localStorage.getItem('user');

  registroRef!: Registro;

  constructor(
    public firebaseAuth: AngularFireAuth, 
    private db: AngularFireDatabase,
    private router: Router
    ) { }

  async singIn(email: string, senha: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, senha)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/home']);
      console.log(res);
      
    })
  }

  async singUp(email: string, senha: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, senha)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      console.log(res);
    })
  }


  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }


  
  insert(userID: string, objeto: any){
    this.db.list(userID).push(objeto)
    .then((result: any) => {
      console.log(result.key);
    })
    .catch((error: any) => {
      console.log(error);
      
    })
  }

  update(userID: string, objeto: any, key: string) {
    this.db.list(userID).update(key, objeto)
      .catch((error: any) => {
        console.error(error);
      });
  }



  getAll(user: string) {
   return this.db.list(user).valueChanges();
  }

  getAllKeys(user: string){
    return this.db.list(user).snapshotChanges();
  }

  delete(userID: string, key: string) {
    this.db.object(`${userID}/${key}`).remove();
  }
  
}
