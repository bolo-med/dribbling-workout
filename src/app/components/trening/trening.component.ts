import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trening } from '../../models/Trening';
import { Vjezba } from 'src/app/models/Vjezba';
import { TokVjezbeEvent } from 'src/app/models/TokVjezbeEvent';
import { PromjenaVjezbeEvent } from 'src/app/models/PromjenaVjezbeEvent';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.scss']
})
export class TreningComponent implements OnInit {

  trening: Trening;
  odmor: Vjezba;
  preostaloVrijemeTreninga: number;
  indeksTrenutneVjezbe: number;
  trenutnaVjezba: Vjezba;
  protekloVrijemeVjezbe: number;
  intervalID: number;
  treningPauziran: boolean;

  @Output() vjezbaPauzirana: EventEmitter<number> = new EventEmitter<number>();
  @Output() vjezbaNastavljena: EventEmitter<number> = new EventEmitter<number>();
  @Output() vjezbaTok: EventEmitter<TokVjezbeEvent> = new EventEmitter<TokVjezbeEvent>();
  @Output() vjezbaPromjena: EventEmitter<PromjenaVjezbeEvent> = new EventEmitter<PromjenaVjezbeEvent>();
  @Output() treningPocetak: EventEmitter<Trening> = new EventEmitter<Trening>();
  @Output() treningKraj: EventEmitter<Trening> = new EventEmitter<Trening>();

  constructor() { }

  ngOnInit(): void {
    this.trening = this.kreirajTrening();
    this.odmor = new Vjezba('odmor', 'Odmorite se', 'Kratak predah između vježbi.', this.trening.trajanjeOdmora, 'odmor.png');
    this.startDefinisane();
  }

  startDefinisane() {
    if ((this.trening !== undefined) && (this.odmor !== undefined)) {
      this.start();
    }
    else {
      return this.startDefinisane();
    }
  }

  start() {
    this.preostaloVrijemeTreninga = this.trening.trajanjeTreninga();
    this.indeksTrenutneVjezbe = 0;
    this.zapocniVjezbu(this.trening.vjezbe[this.indeksTrenutneVjezbe]);
    this.treningPocetak.emit(this.trening);
  }

  zapocniVjezbu(vjezba: Vjezba): void {
    this.trenutnaVjezba = vjezba;
    this.protekloVrijemeVjezbe = 0;
    this.pratiVrijemeVjezbe();
  }

  pratiVrijemeVjezbe(): void {
    // window.setInterval
    this.intervalID = setInterval(() => {
      if (this.protekloVrijemeVjezbe >= this.trenutnaVjezba.trajanje) {
        clearInterval(this.intervalID);
        const sledecaVjezba: Vjezba = this.dajSledecuVjezbu();
        if (sledecaVjezba) {
          if (sledecaVjezba !== this.odmor) {
            this.indeksTrenutneVjezbe++;
          }
          this.zapocniVjezbu(sledecaVjezba);
          this.vjezbaPromjena.emit(new PromjenaVjezbeEvent(sledecaVjezba, this.dajSledecuVjezbu()));
        }
        else {
          this.treningKraj.emit(this.trening);
          console.log('Kraj treninga!');
        }
        // return; // radi i bez ovog
      }
      else {
        this.protekloVrijemeVjezbe++;
        this.preostaloVrijemeTreninga--;
        this.vjezbaTok.emit(new TokVjezbeEvent(this.trenutnaVjezba, 
                                               this.protekloVrijemeVjezbe, 
                                               this.trenutnaVjezba.trajanje - this.protekloVrijemeVjezbe, 
                                               this.preostaloVrijemeTreninga));
      }
    }, 200);
  }

  dajSledecuVjezbu(): Vjezba {
    let sledeca: Vjezba = null;
    if (this.trenutnaVjezba === this.odmor) {
      sledeca = this.trening.vjezbe[this.indeksTrenutneVjezbe + 1];
    }
    else if (this.indeksTrenutneVjezbe === 5 || 
             this.indeksTrenutneVjezbe === 7 ||
             this.indeksTrenutneVjezbe === 10) {
      sledeca = this.odmor;
    }
    else if (this.indeksTrenutneVjezbe < this.trening.vjezbe.length - 1) {
      sledeca = this.trening.vjezbe[this.indeksTrenutneVjezbe + 1];
    }
    return sledeca;
  }

  pauziraj() {
    clearInterval(this.intervalID);
    this.treningPauziran = true;
    this.vjezbaPauzirana.emit(this.indeksTrenutneVjezbe);
  }

  nastavi() {
    this.pratiVrijemeVjezbe();
    this.treningPauziran = false;
    this.vjezbaNastavljena.emit(this.indeksTrenutneVjezbe);
  }

  pauzirajNastavi() {
    if (this.treningPauziran) {
      this.nastavi();
    }
    else {
      this.pauziraj();
    }
  }

  pritisnutTaster(d: KeyboardEvent) {
    if (d.key === 'p' || d.key === 'P') {
      this.pauzirajNastavi();
    }
  }

  kreirajTrening(): Trening {
    let trening = new Trening('dribling01', 'Trening za dribling #01', 30, 3, []);

    trening.vjezbe.push(new Vjezba('aroundToTheRight', 'Around to the right', 
                                   'Pomjerajte loptu oko struka, sto brze mozete, u smjeru kretanja kazaljki na satu.', 
                                   15, '01attr.png', '', ['teqk-UDPCrc?start=20;&mute=1']));
    
    trening.vjezbe.push(new Vjezba('aroundToTheLeft', 'Around to the left', 
                                   'Pomjerajte loptu oko struka, sto brze mozete, u suprotnom smjeru kretanja kazaljki na satu.', 
                                   15, '02attl.png', '', ['teqk-UDPCrc?start=36;&mute=1']));

    trening.vjezbe.push(new Vjezba('kneePoundsRightHand', 'Knee pounds right hand', 
                                   'Tapkajte loptu desnom rukom. Lopta odskace do visine koljena.', 
                                   30, '03kprh.png', '', ['teqk-UDPCrc?start=51;&mute=1']));

    trening.vjezbe.push(new Vjezba('kneePoundsLeftHand', 'Knee pounds left hand', 
                                   'Tapkajte loptu lijevom rukom. Lopta odskace do visine koljena.', 
                                   30, '04kplh.png', '', ['teqk-UDPCrc?start=82;&mute=1']));

    trening.vjezbe.push(new Vjezba('lightTapsRightHand', 'Light taps right hand', 
                                   'Tapkajte loptu desnom rukom. Lopta odskače što je manje moguće.', 
                                   30, '05ltrh.png', '', ['teqk-UDPCrc?start=112;&mute=1']));

    trening.vjezbe.push(new Vjezba('lightTapsLeftHand', 'Light taps left hand', 
                                   'Tapkajte loptu lijevom rukom. Lopta odskače što je manje moguće.', 
                                   30, '06ltlh.png', '', ['teqk-UDPCrc?start=142;&mute=1']));

    // odmor

    trening.vjezbe.push(new Vjezba('oneDribbleCrossover', 'One dribble crossover',  
                                   'Tapnite jedanput loptom prije nego što prebacite lopru u drugu ruku. ' + 
                                   'Prilikom prebacivanja, lopta treba da odskoči od pod, jednom.', 
                                   30, '07odc.png', '', ['teqk-UDPCrc?start=203;&mute=1']));
                              
    trening.vjezbe.push(new Vjezba('crossover', 'Crossover', 
                                   'Prebacujte loptu iz jedne u drugu ruku. ' + 
                                   'Prilikom prebacivanja, lopta treba da odskoči od pod, jednom.', 
                                   30, '08c.png', '', ['teqk-UDPCrc?start=234;&mute=1', 'aAdioIs17LM?&mute=1']));

    // odmor

    trening.vjezbe.push(new Vjezba('oneDribbleBetween', 'One dribble between', 
                                   'Tapnite jedanput loptom prije nego što prebacite lopru u drugu ruku, kroz noge. ' + 
                                   'Lopta mora da odskoci od pod, prilikom prebacivanja.', 
                                   30, '09odb.png', '', ['teqk-UDPCrc?start=290;&mute=1']));

    trening.vjezbe.push(new Vjezba('figure8', 'Figure 8', 
                                   'Tapkajuci loptom, provlacite je kroz noge, formirajuci figuru koja lici na broj 8.', 
                                   30, '10f8.png', '', ['teqk-UDPCrc?start=321;&mute=1']));

    trening.vjezbe.push(new Vjezba('betweenBothLegs', 'Between both legs', 
                                   'Probacujte loptu kroz noge. Lopta mora samo jednom ta odskoci od zemlju.', 
                                   30, '11bbl.png', '', ['teqk-UDPCrc?start=352;&mute=1']));

    // odmor

    trening.vjezbe.push(new Vjezba('windshieldWiperRightHand', 'Windshield wiper right hand', 
                                   'Tapkajte loptu desnom rukom, lijevo-desno. Lopta odskace do visine koljena.', 
                                   30, '12wwrh.png', '', ['teqk-UDPCrc?start=412;&mute=1']));
    
    trening.vjezbe.push(new Vjezba('windshieldWiperLeftHand', 'Windshield wiper left hand', 
                                   'Tapkajte loptu lijevom rukom, lijevo-desno. Lopta odskace do visine koljena.', 
                                   30, '13wwlh.png', '', ['teqk-UDPCrc?start=442;&mute=1']));

    trening.vjezbe.push(new Vjezba('inAndOutRightHand', 'In and out right hand', 
                                   'Tapkajte loptu desnom rukom, u visini koljena. ' + 
                                   'Rotirajte rucni zglob tako da lopta dobije smjer od spolja ka unutra.', 
                                   30, '14iaorh.png', '', ['teqk-UDPCrc?start=472;&mute=1']));

    trening.vjezbe.push(new Vjezba('inAndOutLeftHand', 'In and out left hand', 
                                   'Tapkajte loptu lijevom rukom, u visini koljena. ' + 
                                   'Rotirajte rucni zglob tako da lopta ima smjer od spolja ka unutra.', 
                                   30, '15iaolh.png', '', ['teqk-UDPCrc?start=503;&mute=1']));

    trening.vjezbe.push(new Vjezba('walkTheDogRightHand', 'Walk the dog right hand', 
                                   'Tapkajte loptu desnom rukom, sa strane. Rotirajte zglob ruke tako da lopta ima smjer naprijed-nazad.', 
                                   30, '16wtdrh.png', '', ['teqk-UDPCrc?start=533;&mute=1']));

    trening.vjezbe.push(new Vjezba('walkTheDogLeftHand', 'Walk the dog left hand', 
                                   'Tapkajte loptu lijevom rukom, sa strane. Rotirajte zglob ruke tako da lopta ima smjer naprijed-nazad.', 
                                   30, '17wtdlh.png', '', ['teqk-UDPCrc?start=565;&mute=1']));

    return trening;
  };

}
