import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSubtitle'
})
/**
 * Pipe que cambia el nombre de la película si esta tiene el caracter ":" para poner entre paréntesis el subtítulo de la pelicula
 */
export class TitleSubtitlePipe implements PipeTransform {

  transform(value: string, args?: string[]): string {
    let output = value;
    if (output.includes(":")){
      let array = output.split(":");
      output = array[0] + "(" + array[1] + ")";
    }
    return output;
  }
}
