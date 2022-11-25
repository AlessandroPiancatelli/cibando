import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule} from 'primeng/accordion';
import { HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { PaginaSuccessoComponent } from './components/pagina-successo/pagina-successo.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { VideoComponent } from './components/video/video.component';
import { ResultComponent } from './components/recipes/result/result.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecipesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    ErrorComponent,
    RegistrationComponent,
    ContactsComponent,
    AddRecipeComponent,
    ChangeColorDirective,
    PaginaSuccessoComponent,
    LoginComponent,
    ProfileComponent,
    VideoComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    AccordionModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
