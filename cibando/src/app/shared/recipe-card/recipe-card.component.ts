import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  percorsoDifficolta = "../../../../assets/images/difficolta-"

  recipes: Recipe[] = [];
  page = 1;
  ricettePerPagina = 4;
  pagingNumber = 0;

  @Input() origine:string;

  @Output() messaggio = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {this.recipeService.getRecipes().subscribe({
    next: (res) => {
      this.recipes = res;
      if(this.origine=='home'){
       this.recipes = this.recipes.sort((a,b)=> b._id - a._id).slice(0,4);
      } else{
        this.recipes = this.recipes.sort((a,b)=> a._id - b._id)
      }
    },
    error: (err) => {
      console.error(err);
    }
  })

  this.pagine();

  }

  inviaTitolo(titolo: string){
    this.messaggio.emit( titolo);
  }

  pagine(){
    let tot;
    if (this.recipes){
      tot = this.recipes.length
    }

    this.page = 1;
    this.pagingNumber = 0;
    this.pagingNumber = Math.ceil(this.recipes.length/ this.ricettePerPagina / 4)
  }
}
