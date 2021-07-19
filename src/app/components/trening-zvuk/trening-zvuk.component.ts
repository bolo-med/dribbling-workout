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
  // @ViewChild('naslovVjezbe') private naslovVjezbe: ZvucnaSignalizacijaDirective;
  // zvukSledeceVjezbe: string;

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
    this.tings.pusti();
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
    if (tok.protekloVrijeme === Math.floor(tok.vjezba.trajanje / 2) && (tok.vjezba.nazivID === 'odmor')) {
      this.halfway.pusti();
    }
    else if (tok.preostaloVrijeme === 3) {
      this.priKraju.pusti();
    }
  }

  onPromjenaVjezbe(mijenjanje: PromjenaVjezbeEvent) {
    // this.zvukSledeceVjezbe = mijenjanje.sledeca.zvuk;
    setTimeout(() => {this.next.pusti()}, 2000);
    // setTimeout(() => {this.naslovVjezbe.pusti()}, 3000);
  }

}
