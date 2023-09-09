import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  isLogged = new EventEmitter<boolean>();
  isUpdated = new EventEmitter<boolean>();

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {}

  async signin(email: string, senha: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, senha)
      .then((res) => {
        this.isLoggedIn = true;
        this.isLogged.emit(true);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
        console.log(res);
      });
  }

  async signup(email: string, senha: string, userData: any) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, senha)
      .then((res) => {
        const uid = res?.user?.uid;
       this.insertUser(uid as string, userData)
      });
  }

  usuarioAutenticado(){
    return this.isLoggedIn;
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLogged.emit(false);
    this.router.navigate(['/login']);
  }

  getAll(user: string) {
    return this.db.list(`registros/${user}`).valueChanges();
  }

  getAllKeys(user: string) {
    return this.db.list(`registros/${user}`).snapshotChanges();
  }

  getSingle(user: string, key: string) {
    return this.db
      .object(`registros/${user}/${key}`)
      .snapshotChanges()
      .pipe(map((res) => res.payload.val()));
  }

  getHistorico(user: string, key: string) {
    return this.db
      .object(`registros/${user}/${key}/historico`)
      .snapshotChanges()
      .pipe(map((res) => res.payload.val()));
  }

  insert(userID: string, objeto: any) {
    this.db
      .list(`registros/${userID}`)
      .push(objeto)
      .then((result: any) => {
        this.router.navigate(['/home']);
        console.log(result.key);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  insertHistorico(userID: string, objeto: any, key: string) {
    this.db
      .list(`registros/${userID}/${key}/historico`)
      .push(objeto)
      .catch((error: any) => {
        console.log(error);
      });
  }

  update(userID: string, objeto: any, key: string, type: string) {
    this.db.list(`registros/${userID}`).update(key, objeto)
    .then((res) => {
     if(type === 'edit'){
      this.isUpdated.emit(true);
     }
    })
    .catch((error: any) => {
        console.error(error);
        this.isUpdated.emit(false);
      });
  }
  


  delete(userID: string, key: string) {
    this.db.object(`registros/${userID}/${key}`).remove().then((result: any) => {
      this.router.navigate(['/home']);
    })
  }

  deleteHistorico(userID: string, key: string, keyHistorico: string) {
    this.db.object(`registros/${userID}/${key}/historico/${keyHistorico}`).remove().then((result: any) => {
      
    })
  }




  insertUser(userID: string, objeto: any) {
    this.db
      .list(`usuarios/${userID}`)
      .push(objeto)
      // .then((result: any) => {
      //   this.router.navigate(['/home']);
      // })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
