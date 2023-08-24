import { HistoricoGeralComponent } from './view/historico-geral/historico-geral.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { NovoRegistroComponent } from './view/home/novo-registro/novo-registro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesRegistroComponent } from './view/home/detalhes-registro/detalhes-registro.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracaoComponent } from './view/configuracao/configuracao.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'historico-geral', component: HistoricoGeralComponent, canActivate: [AuthGuard] }, 
  { path: 'configuracao', component: ConfiguracaoComponent, canActivate: [AuthGuard] }, 
  { path: 'registro/:id', component: DetalhesRegistroComponent, canActivate: [AuthGuard] },
  { path: 'novo-registro', component: NovoRegistroComponent, canActivate: [AuthGuard]  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
