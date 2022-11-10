import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  evidenziato = false;

  constructor() { }

  ngOnInit(): void {
    console.log('qui siamo nella home')
  }
  ngOnDestroy(): void {
    console.log('sei uscito dalla home')
  }
  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}
