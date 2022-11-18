import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  ricette: Recipe[] = [];
  titoloRicevuto: string = '';
  messaggioRicerca:string;

  constructor(private recipeService: RecipeService, private searchService: SearchService ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.riceviRicerca();
  }
  riceviTitolo(e:any){
    if(this.titoloRicevuto===''){
    this.titoloRicevuto=e;
    } else {
      this.titoloRicevuto = '';
    }
  }

  riceviRicerca(){
    this.searchService.parolaRicercata.subscribe((res:any)=> {
      //recuper i dati dalla subject e li immagazzino nelle local storage
      // localStorage.setItem('nome', res.nome);
      // localStorage.setItem('email', res.email);
      this.messaggioRicerca = res;
    });
  }
}
