import { RegistrosService } from './registros.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { HistoricoGeralComponent } from './historico-geral/historico-geral.component';
import { HistoricoRegistroComponent } from './registros/historico-registro/historico-registro.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { CriarRegistroComponent } from './registros/criar-registro/criar-registro.component';
import { FormsModule } from '@angular/forms';
import { RegistroNaoEncontradoComponent } from './registros/registro-nao-encontrado/registro-nao-encontrado.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    LoginComponent,
    MenuNavComponent,
    HistoricoGeralComponent,
    HistoricoRegistroComponent,
    UserConfigComponent,
    CriarRegistroComponent,
    RegistroNaoEncontradoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    RegistrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
