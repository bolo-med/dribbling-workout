import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: 'audio', // na ovaj nacin se odnosi na sve <audio> elemente
  selector: '[appZvucnaSignalizacija]',
  exportAs: 'zvucnaSignalizacija'
})
export class ZvucnaSignalizacijaDirective {

  private audioPlejer: HTMLAudioElement;

  constructor(el: ElementRef) {
    this.audioPlejer = el.nativeElement;
  }

  pauziraj() {
    this.audioPlejer.pause();
  }

  pusti() {
    this.audioPlejer.play();
  }

  get trenutnoVrijeme() {
    return this.audioPlejer.currentTime;
  }

  get trajanje() {
    return this.audioPlejer.duration;
  }

  get jeLiZavrseno() {
    return this.trenutnoVrijeme === this.trajanje;
  }

}

