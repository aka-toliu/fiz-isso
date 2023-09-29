import { AngularFireModule } from '@angular/fire/compat';
import { HomeModule } from './view/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { HistoricoGeralComponent } from './view/historico-geral/historico-geral.component';
import { ConfiguracaoComponent } from './view/configuracao/configuracao.component';
import { CardRegistroComponent } from './shared/card-registro/card-registro.component';
import { CardHistoricoComponent } from './shared/card-historico/card-historico.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { NaoEncontradoComponent } from './view/nao-encontrado/nao-encontrado.component';
import { ErroComponent } from './shared/erro/erro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { EditarRegistroComponent } from './view/home/editar-registro/editar-registro.component';
import { EsqueciSenhaComponent } from './view/esqueci-senha/esqueci-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistoricoGeralComponent,
    ConfiguracaoComponent,
    CardRegistroComponent,
    CardHistoricoComponent,
    LoaderComponent,
    MenuNavComponent,
    NaoEncontradoComponent,
    ErroComponent,
    CadastroComponent,
    EditarRegistroComponent,
    EsqueciSenhaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyDtiL4KTx_yImv77BLSz2CEVRvny4BeEeE",
        authDomain: "fiz-isso.firebaseapp.com",
        databaseURL: "https://fiz-isso-default-rtdb.firebaseio.com",
        projectId: "fiz-isso",
        storageBucket: "fiz-isso.appspot.com",
        messagingSenderId: "525291205680",
        appId: "1:525291205680:web:7f95433896c3676a6aa9f5",
        measurementId: "G-9ZL657CFZP"
    }),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
