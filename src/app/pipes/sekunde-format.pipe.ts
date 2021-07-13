import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sekundeFormat'
})
export class SekundeFormatPipe implements PipeTransform {

  transform(value: number): any {
    if (!isNaN(value)) {

      if (value < 60) {
        return ('0' + value).substr(-2);
      }

      const sati = Math.floor(value / 3600);
      const minuti = Math.floor((value - (sati * 3600)) / 60);
      const sekunde = value - (sati * 3600) - (minuti * 60);

      return ('0' + sati).substr(-2) + ':' + ('0' + minuti).substr(-2) + ':' + ('0' + sekunde).substr(-2);
    }

    return;
  }

}

