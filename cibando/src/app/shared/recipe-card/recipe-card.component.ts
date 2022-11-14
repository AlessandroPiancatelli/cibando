import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  percorsoDifficolta = "../../../../assets/images/difficolta-"
  @Input() recipes: Recipe[];

  @Output() messaggio = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  inviaTitolo(titolo: string){
    this.messaggio.emit( titolo);
  }
}
