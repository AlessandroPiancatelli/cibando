
import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered} from '@fortawesome/free-regular-svg-icons';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //title = 'cibando';
  iconaHome = faHouzz;
  iconaScheda = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistrati = faRegistered;
  isCollapsed = true;
  msg:string;
  test:string;

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  prendiTesto(){
   this.searchService.parolaRicercata.next(this.msg);
  }
}
