## 10-minutni košarkaški trening za dribling

Trening se sastoji od nekoliko vježbi, različitog trajanja, i tri pauze. Korisnik može da pauzira i nastavlja trening, i da prati preostalo vrijeme treninga, kao i preostalo vrijeme vježbe uz progres bar.

Na glavnom dijelu je prikazan naslov trenutne vježbe, ilustracija (slika) izvođenja vježbe, a u toku pauze je prikazan naslov sledeće vježbe. Sa strana su opis vježbe i video snimci izvođenja vježbe.

Tokom treninga se čuje odgovarajuća zvučna signalizacija.

![](slika.PNG)

**PROBLEM**: U komponenti *TreningComponent* se odmah aktivira događaj, posle koga se poziva f-ja iz komponente *TreningZvukComponent*, i to prije nego što se inicijalizuju njene promenljive.

>ERROR TypeError: Cannot read property 'pusti' of undefined\
>   at TreningZvukComponent.nastavi (trening-zvuk.component.ts:33)\
>   at KontejnerTtzComponent_Template_app_trening_treningPocetak_0_listener (kontejner-ttz.component.html:5)

