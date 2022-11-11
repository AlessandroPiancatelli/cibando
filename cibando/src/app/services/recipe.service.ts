import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs'; //l'of nasce per lavorare sui file moc

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of (RECIPES);
  }

  getRecipe(id:number): Observable<Recipe | undefined>{
    const recipe = RECIPES.find(recipe => recipe._id === id);
    return of (recipe)
  }
}
