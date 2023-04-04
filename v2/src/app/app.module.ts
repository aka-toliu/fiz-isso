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
import { ErroComponent } from './view/erro/erro.component';
import { DetalhesRegistroComponent } from './view/detalhes-registro/detalhes-registro.component';

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
    DetalhesRegistroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
