import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  ricette: Recipe[] = [];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
