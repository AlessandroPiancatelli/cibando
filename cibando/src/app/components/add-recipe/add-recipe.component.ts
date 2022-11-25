import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  editor = ClassicEditor;
  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    difficulty: new FormControl<number>(Number(''), [Validators.required]),
    published: new FormControl<boolean>(Boolean(''))
  })
  images = [
    {id:1,
     label:'Spaghetti al sugo'},
    {id:2,
    label:'Tagliata di manzo'},
    {id:3,
    label:'Tiramisù classico'}
  ];

  percorso='../assets/images/carousel-';
  constructor(private recipeService:RecipeService, private searchService:SearchService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
    this.recipeService.saveRecipe(this.form.getRawValue()).subscribe();
    this.onProva();
  }
  onProva(){
    var ricettaMock = {
      titolo : this.form.value.title,
      descrizione : this.form.value.description,
      immagine:this.form.value.image,
      difficolta:this.form.value.difficulty,
      pubblicata:this.form.value.published
    }
    this.searchService.NomeRicettaCreata.next(ricettaMock);
    this.router.navigate(["successo"])
  }

}
