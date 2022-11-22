import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs'; //l'of nasce per lavorare sui file moc
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiBaseUrl="/api/recipes";

  constructor(private http:HttpClient) {

  }

  // //prendo tutte le ricette
  // getRecipes(): Observable<Recipe[]> {
  //  // return of (RECIPES);
  //     return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  // }


    //prendo tutte le ricette tramite pipe Async
    getRecipes() {
      // return of (RECIPES);
         return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
     }

  // getRecipe(id:number): Observable<Recipe | undefined>{
  //   const recipe = RECIPES.find(recipe => recipe._id === id);
  //   return of (recipe)
  // }

  getRecipe(id:number): Observable<Recipe | undefined>{
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  saveRecipe(body:any) :Observable<any>{
    return this.http.post<Recipe>(`/api/recipes/`,body)
  }
}
