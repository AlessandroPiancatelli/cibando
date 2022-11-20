import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'errore',component:ErrorComponent},
  {path:'contatti', component:ContactsComponent},
  {path:'registration', component:RegistrationComponent },
  {path:'ricette', component:RecipesComponent, children:[
    {path:'dettaglio/:title/:_id', component:DetailComponent},
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
