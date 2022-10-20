import { Component, OnInit } from '@angular/core';
import { Colors, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  sortBy: string = '';
  heroes: Heroe[] = [
    {
      nombre: "Super man",
      vuela: true,
      color: Colors.azul,
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Colors.negro,
    },
    {
      nombre: "Aquaman",
      vuela: false,
      color: Colors.verde,
    },
    {
      nombre: "Spider-man",
      vuela: false,
      color: Colors.rojo,
    },
    {
      nombre: "Thor",
      vuela: true,
      color: Colors.negro,
    },
    {
      nombre: "BuzzLightyear",
      vuela: true,
      color: Colors.azul,
    },
    {
      nombre: "Jose Carlos",
      vuela: true,
      color: Colors.rojo,
    },
  ]

  constructor() { }

  ngOnInit(): void { }

  changeMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  changeSortBy(nameFilter: string) {
    this.sortBy = nameFilter;
  }

}
