import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect Pipe
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural Pipe
  clientes: string[] = ['Maria', 'Fernando', 'Nicolas', 'Jose Carlos'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes esperando',
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAJose() {
    this.nombre = "Jose";
    this.genero = "masculino";
  }

  cambiarASuasana() {
    this.nombre = "Susana";
    this.genero = "femenino";
  }


  crearCliente() {
    const posiblesNuevosCliente: string[] = ['Maria', 'Fernando', 'Nicolas', 'Jose Carlos'];
    const numClientesArr = posiblesNuevosCliente.length;
    const indexRandomNuevoCliente = Math.round(Math.random() * (numClientesArr - 0) + 0);
    this.clientes.push(posiblesNuevosCliente[indexRandomNuevoCliente]);
  }

  borrarCliente() {
    this.clientes.pop()
  }

  // key value pipe
  persona = {
    nombre: 'Jose Csrlos',
    edad: 25,
    direccion: 'C. Vicente Guerrero'
  }

  // json pipe
  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ]


  // async pipe
  miObsevable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' tenemos data promesa');
    }, 3500)
  });
}
