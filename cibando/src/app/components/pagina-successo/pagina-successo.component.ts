import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-pagina-successo',
  templateUrl: './pagina-successo.component.html',
  styleUrls: ['./pagina-successo.component.scss']
})
export class PaginaSuccessoComponent implements OnInit {

  percorsoDifficolta = "../../../../assets/images/difficolta-"
  nome:string;
  title:string;
  description:string;
  image:string;
  difficulty:string;
  pubblicata:string;
  recipe: { title : string , description:string, image:string, difficulty:string, pubblicata:string};

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    this.riceviDatiUtente();
  }
  riceviDatiUtente(){
    this.searchService.NomeRicettaCreata.subscribe((res:any)=> {
      //recuper i dati dalla subject e li immagazzino nelle local storage
      // localStorage.setItem('nome', res.nome);
      // localStorage.setItem('email', res.email);
      this.title = res.titolo;
      this.description= res.descrizione;
      this.image = res.immagine;
      this.difficulty = res.difficolta;
      this.pubblicata = res.pubblicata;
      console.log(this.recipe);
    });
  }
}
