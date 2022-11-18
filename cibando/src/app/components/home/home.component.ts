import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  evidenziato = false;
  ricette: Recipe[] = [];

  nome:string;
  email:string;

  constructor(private recipeService: RecipeService, private userService:UserService) { }

  ngOnInit(): void {this.recipeService.getRecipes().subscribe({
    next: (res) => {
      this.ricette = res;
      this.ricette = this.ricette.sort((a,b)=> b._id - a._id).slice(0,4);
    },
    error: (err) => {
      console.error(err);
    }
  })

  this.riceviDatiUtente();
  console.log('nome: ' + this.nome)

  }

  riceviDatiUtente(){
    this.userService.datiUtente.subscribe((res:any)=> {
      //recuper i dati dalla subject e li immagazzino nelle local storage
      // localStorage.setItem('nome', res.nome);
      // localStorage.setItem('email', res.email);
      this.nome = res.nome;
      this.email = res.email;
    });

    if(localStorage.getItem('nome')){
      this.nome = localStorage.getItem('nome');
      this.email = localStorage.getItem('email');
    }
  }

  closeModal(){
    // localStorage.removeItem('nome');
    // localStorage.removeItem('email');
    // localStorage.clear();
    this.nome = '';
    this.email = '';
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home')
  }
  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}
