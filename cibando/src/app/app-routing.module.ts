
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { PaginaSuccessoComponent } from './components/pagina-successo/pagina-successo.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { VideoComponent } from './components/video/video.component';
import { LoggedInGuard } from './logged-in.guard';
import { ResultComponent } from './components/recipes/result/result.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'errore',component:ErrorComponent},
  {path:'contatti', component:ContactsComponent},
  {path:'AggiungiRicetta', component: AddRecipeComponent, canActivate:[LoggedInGuard]},
  {path:'successo', component:PaginaSuccessoComponent},
  {path:'profilo', component:ProfileComponent, canActivate:[LoggedInGuard]},
  {path:'login', component:LoginComponent},
  {path:'video', component:VideoComponent, canActivate: [LoggedInGuard]},
  {path:'registration', component:RegistrationComponent },
  {path:'ricette', component:RecipesComponent, children:[
    {path:'dettaglio/:title/:_id', component:DetailComponent},
    {path:'result', component:ResultComponent},
    {path:'',pathMatch:'full', component:RecipesListComponent},
  ]},
  //{path:'dettaglio/:_id', component:DetailComponent},
  {path:'**', redirectTo:'errore'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
