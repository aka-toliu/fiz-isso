import { LoginComponent } from './login/login.component';
import { RegistroNaoEncontradoComponent } from './registros/registro-nao-encontrado/registro-nao-encontrado.component';
import { HistoricoRegistroComponent } from './registros/historico-registro/historico-registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoGeralComponent } from './historico-geral/historico-geral.component';
import { RegistrosComponent } from './registros/registros.component';
import { CriarRegistroComponent } from './registros/criar-registro/criar-registro.component';
import { UserConfigComponent } from './user-config/user-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: RegistrosComponent},
  { path: 'historico', component: HistoricoGeralComponent},
  { path: 'config', component: UserConfigComponent},
  { path: 'login', component: LoginComponent},
  { path: 'criar', component: CriarRegistroComponent},
  { path: 'registro/:id', component: HistoricoRegistroComponent},
  { path: 'registro-nao-encontrado', component: RegistroNaoEncontradoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
