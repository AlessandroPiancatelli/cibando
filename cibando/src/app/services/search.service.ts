import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  parolaRicercata = new ReplaySubject();
  NomeRicettaCreata = new ReplaySubject();
  constructor() { }
}
