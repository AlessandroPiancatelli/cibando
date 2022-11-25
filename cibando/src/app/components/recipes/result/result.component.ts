import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  testo:string;
  ricette:Recipe[] = [];

  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(): void {
    this.recipeService.cerca.subscribe(
      (res:any) => {
        this.testo = res;
        this.recipeService.searchRecipe(this.testo).subscribe({
          next:(res)=> {
            this.ricette = res;
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    )
  }
}
