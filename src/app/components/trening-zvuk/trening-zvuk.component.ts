import { Component, OnInit, ViewChild } from '@angular/core';
import { ZvucnaSignalizacijaDirective } from 'src/app/directives/zvucna-signalizacija.directive';
import { TokVjezbeEvent } from 'src/app/models/TokVjezbeEvent';
import { PromjenaVjezbeEvent } from 'src/app/models/PromjenaVjezbeEvent';

@Component({
  selector: 'app-trening-zvuk',
  templateUrl: './trening-zvuk.component.html',
  styleUrls: ['./trening-zvuk.component.scss']
})
export class TreningZvukComponent implements OnInit {

  @ViewChild('tings') private tings: ZvucnaSignalizacijaDirective;
  @ViewChild('halfway') private halfway: ZvucnaSignalizacijaDirective;
  @ViewChild('priKraju') private priKraju: ZvucnaSignalizacijaDirective;
  @ViewChild('next') private next: ZvucnaSignalizacijaDirective;
  @ViewChild('naslovVjezbe') private naslovVjezbe: ZvucnaSignalizacijaDirective;
  zvukSledeceVjezbe: string = '01attr.mp3';

  constructor() { }

  ngOnInit(): void {
  }

  stop() {
    this.tings.pauziraj();
    this.halfway.pauziraj();
    this.priKraju.pauziraj();
    this.next.pauziraj();
  }

  nastavi() {
    this.tings.pusti(); // Ovako ne radi. Pokusa da pokrene f-ju 'pusti()' prije nego sto je 'tings' inicijalizovano.

    if (this.halfway.trenutnoVrijeme > 0 && !this.halfway.jeLiZavrseno) {
      this.halfway.pusti();
    }
    else if (this.priKraju.trenutnoVrijeme > 0 && !this.priKraju.jeLiZavrseno) {
      this.priKraju.pusti();
    }
    else if (this.next.trenutnoVrijeme > 0 && !this.next.jeLiZavrseno) {
      this.next.pusti();
    }
  }

  onTokVjezbe(tok: TokVjezbeEvent) {
    if (tok.protekloVrijeme === Math.floor(tok.vjezba.trajanje / 2) && (tok.vjezba.nazivID !== 'odmor')) {
      this.halfway.pusti();
    }
    else if (tok.preostaloVrijeme === 3) {
      this.priKraju.pusti();
    }
    else if ((tok.preostaloVrijeme < 1) && (tok.preostaloVrijemeTreninga > 2)) {
      this.next.pusti();
    }
    else if (tok.vjezba.nazivID === 'aroundToTheRight' && tok.protekloVrijeme === 1) {
      this.naslovVjezbe.pusti();
    }
  }

  onPromjenaVjezbe(mijenjanje: PromjenaVjezbeEvent) {
    this.zvukSledeceVjezbe = mijenjanje.trenutna.zvuk;
    setTimeout(() => {this.naslovVjezbe.pusti()}, 1000);
  }

}
