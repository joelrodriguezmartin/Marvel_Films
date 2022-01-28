import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phase'
})
/**
 * Pipe que recoge el año y devuelve la fase del MCU a la que pertenece la pelicula
 */
export class PhasePipe implements PipeTransform {
  transform(value: number, args?: unknown[]): string {
    let phase = 0;
    if (value <= 2012){
      phase = 1;
    }else if (value > 2012 && value <= 2015){
      phase = 2;
    }else if (value > 2015 && value <= 2019){
      phase = 3;
    }else if (value > 2019){
      phase = 4;
    }
    return value + " (Phase " + phase + ")";
  }

}
