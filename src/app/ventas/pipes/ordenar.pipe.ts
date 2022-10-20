import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarBy: string = 'sin valor'): Heroe[] {

    if (ordenarBy == 'nombre') {
      heroes = heroes.sort((heroeA, heroeB) => heroeA.nombre > heroeB.nombre ? 1 : - 1);
    }

    if (ordenarBy == 'vuela') {
      heroes = heroes.sort((heroeA, heroeB) => (heroeA.vuela > heroeB.vuela) == true ? -1 : 1);
    }

    if (ordenarBy == 'color') {
      heroes = heroes.sort((heroeA, heroeB) => heroeA.color > heroeB.color ? 1 : - 1);
    }

    return heroes;
  }

}
