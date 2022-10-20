import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

}
