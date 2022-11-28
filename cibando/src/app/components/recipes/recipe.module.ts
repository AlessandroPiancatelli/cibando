import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule} from 'primeng/accordion';
import { RecipeRoutingModule } from './recipe-routing.module';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";


import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ResultComponent } from './result/result.component';
import { RecipeCardComponent } from 'src/app/shared/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    DetailComponent,
    RecipesListComponent,
    ResultComponent,
    RecipeCardComponent
  ],
  imports: [
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbCollapseModule,
    AccordionModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    RecipeRoutingModule,
    PasswordModule,
    DividerModule
  ],
  exports: [RecipeCardComponent]
})

export class RecipesModule{ }
