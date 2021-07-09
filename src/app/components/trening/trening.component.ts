import { Component, OnInit } from '@angular/core';
import { Trening } from '../../models/Trening';
import { Vjezba } from 'src/app/models/Vjezba';

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

  constructor() { }

  ngOnInit(): void {
    this.trening = this.kreirajTrening();
    this.odmor = new Vjezba('odmor', 'Odmorite se', 'Kratak predah između vježbi.', this.trening.trajanjeOdmora, 'odmor.png');
    this.start();
  }

  start() {
    this.preostaloVrijemeTreninga = this.trening.trajanjeTreninga();
    this.indeksTrenutneVjezbe = 0;
    this.zapocniVjezbu(this.trening.vjezbe[this.indeksTrenutneVjezbe]);
  }

  zapocniVjezbu(vjezba: Vjezba): void {
    this.trenutnaVjezba = vjezba;
    this.protekloVrijemeVjezbe = 0;
    const intervalId = setInterval(() => {
      if (this.protekloVrijemeVjezbe >= this.trenutnaVjezba.trajanje) {
        clearInterval(intervalId);
        const sledecaVjezba: Vjezba = this.dajSledecuVjezbu(this.trenutnaVjezba);
        if (sledecaVjezba) {
          if (sledecaVjezba !== this.odmor) {
            this.indeksTrenutneVjezbe++;
          }
          this.zapocniVjezbu(sledecaVjezba);
        }
        else {
          console.log('Kraj treninga!');
        }
      }
      else {
        this.protekloVrijemeVjezbe++;
      }
    }, 200);
  }

  dajSledecuVjezbu(trenutna: Vjezba): Vjezba {
    let sledeca: Vjezba = null;
    if (trenutna === this.odmor) {
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

  kreirajTrening(): Trening {
    let trening = new Trening('dribling01', 'Trening za dribling #01', 30, 3, []);

    trening.vjezbe.push(new Vjezba('aroundToTheRight', 'Around to the right', 
                                   'Pomjerajte loptu oko struka, sto brze mozete, u smjeru kretanja kazaljki na satu.', 
                                   15, '01attr.png'));
    
    trening.vjezbe.push(new Vjezba('aroundToTheLeft', 'Around to the left', 
                                   'Pomjerajte loptu oko struka, sto brze mozete, u suprotnom smjeru kretanja kazaljki na satu.', 
                                   15, '02attl.png'));

    trening.vjezbe.push(new Vjezba('kneePoundsRightHand', 'Knee pounds right hand', 
                                   'Tapkajte loptu desnom rukom. Lopta odskace do visine koljena.', 
                                   30, '03kprh.png'));

    trening.vjezbe.push(new Vjezba('kneePoundsLeftHand', 'Knee pounds left hand', 
                                   'Tapkajte loptu lijevom rukom. Lopta odskace do visine koljena.', 
                                   30, '04kplh.png'));

    trening.vjezbe.push(new Vjezba('lightTapsRightHand', 'Light taps right hand', 
                                   'Tapkajte loptu desnom rukom. Lopta odskače što je manje moguće.', 
                                   30, '05ltrh.png'));

    trening.vjezbe.push(new Vjezba('lightTapsLeftHand', 'Light taps left hand', 
                                   'Tapkajte loptu lijevom rukom. Lopta odskače što je manje moguće.', 
                                   30, '06ltlh.png'));

    // odmor

    trening.vjezbe.push(new Vjezba('oneDribbleCrossover', 'One dribble crossover',  
                                   'Tapnite jedanput loptom prije nego što prebacite lopru u drugu ruku. ' + 
                                   'Prilikom prebacivanja, lopta treba da odskoči od pod, jednom.', 
                                   30, '07odc.png'));
                              
    trening.vjezbe.push(new Vjezba('crossover', 'Crossover', 
                                   'Prebacujte loptu iz jedne u drugu ruku. ' + 
                                   'Prilikom prebacivanja, lopta treba da odskoči od pod, jednom.', 
                                   30, '08c.png'));

    // odmor

    trening.vjezbe.push(new Vjezba('oneDribbleBetween', 'One dribble between', 
                                   'Tapnite jedanput loptom prije nego što prebacite lopru u drugu ruku, kroz noge. ' + 
                                   'Lopta mora da odskoci od pod, prilikom prebacivanja.', 
                                   30, '09odb.png'));

    trening.vjezbe.push(new Vjezba('figure8', 'Figure 8', 
                                   'Tapkajuci loptom, provlacite je kroz noge, formirajuci figuru koja lici na broj 8.', 
                                   30, '10f8.png'));

    trening.vjezbe.push(new Vjezba('betweenBothLegs', 'Between both legs', 
                                   'Probacujte loptu kroz noge. Lopta mora samo jednom ta odskoci od zemlju.', 
                                   30, '11bbl.png'));

    // odmor

    trening.vjezbe.push(new Vjezba('winfshieldWiperRightHand', 'Winfshield wiper right hand', 
                                   'Tapkajte loptu desnom rukom, lijevo-desno. Lopta odskace do visine koljena.', 
                                   30, '12wwrh.png'));
    
    trening.vjezbe.push(new Vjezba('winfshieldWiperLeftHand', 'Winfshield wiper left hand', 
                                   'Tapkajte loptu lijevom rukom, lijevo-desno. Lopta odskace do visine koljena.', 
                                   30, '13wwlh.png'));

    trening.vjezbe.push(new Vjezba('inAndOutRightHand', 'In and out right hand', 
                                   'Tapkajte loptu desnom rukom, u visini koljena. ' + 
                                   'Rotirajte rucni zglob tako da lopta dobije smjer od spolja ka unutra.', 
                                   30, '14iaorh.png'));

    trening.vjezbe.push(new Vjezba('inAndOutLeftHand', 'In and out left hand', 
                                   'Tapkajte loptu lijevom rukom, u visini koljena. ' + 
                                   'Rotirajte rucni zglob tako da lopta ima smjer od spolja ka unutra.', 
                                   30, '15iaolh.png'));

    trening.vjezbe.push(new Vjezba('walkTheDogRightHand', 'Walk the dog right hand', 
                                   'Tapkajte loptu desnom rukom, sa strane. Rotirajte zglob ruke tako da lopta ima smjer naprijed-nazad.', 
                                   30, '16wtdrh.png'));

    trening.vjezbe.push(new Vjezba('walkTheDogLeftHand', 'Walk the dog left hand', 
                                   'Tapkajte loptu lijevom rukom, sa strane. Rotirajte zglob ruke tako da lopta ima smjer naprijed-nazad.', 
                                   30, '17wtdlh.png'));

    return trening;
  };

}