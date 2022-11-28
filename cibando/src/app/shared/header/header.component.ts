import { RecipeService } from './../../services/recipe.service';

import { Component, OnInit,DoCheck } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered} from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
user: any;
  //title = 'cibando';
  iconaHome = faHouzz;
  iconaScheda = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistrati = faRegistered;
  iconaAggiungiRicetta = faAdd;
  isCollapsed = true;
  msg:string;
  test:string;

  constructor(private recipeService:RecipeService, public authService:AuthService, private router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) !==null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  prendiTesto(){
   this.recipeService.cerca.next(this.msg);
   this.router.navigate(['ricette/result'])
  }

  open(content:any , azioneDaEseguire?:string, id?:number , titolo?:string){
    let idNumber=id;
    let title = titolo;

    this.modalService.open(content, { ariaLabelledBy:'modal-basic-title', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire');
      this.logout();
      this.modalService.dismissAll();
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    })

   }

   chiudiModale(e){
    if (e==true){
      this.modalService.dismissAll()
    }
   }
}
