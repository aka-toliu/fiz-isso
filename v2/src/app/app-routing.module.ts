import { CadastroComponent } from './view/cadastro/cadastro.component';
import { NovoRegistroComponent } from './view/home/novo-registro/novo-registro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesRegistroComponent } from './view/home/detalhes-registro/detalhes-registro.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'registro/:id', component: DetalhesRegistroComponent},
  { path: 'novo-registro', component: NovoRegistroComponent }, 
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
