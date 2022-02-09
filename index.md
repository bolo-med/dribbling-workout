## Košarkaški trening za unapređenje driblinga

Trening se sastoji od 10-ak različitih vježbi, sa pauzama između. Prikazuje se opis za svaku vjezbu, ilustracija i video-snimak izvođenja. Moguće je pauzirati trening. Postoji zvučna signalizacija za naslov svake vježbe, sredinu i kraj vjezbe, kao i za svaku proteklu sekundu.

![Slika aplikacije](/docs/assets/images/sl1.png)
*Slika 1 - Snapshot aplikacije*

## Komponente aplikacije

![Numerisana slika aplikacije](/docs/assets/images/sl2.png)
*Slika 2 - Numerisane komponente aplikacije*

1. Opis vježbe
2. Preostalo vrijeme treninga
3. Naslov vježbe
4. Ilustracija izvođenja vježbe
5. Video snimci izvođenja vježbe
6. Preostalo vrijeme vježbe - progress bar i tekstualni prikaz
7. Dugme za pauziranje/nastavak treninga

## Neke od tehnologija

- @Pipe - za transformaciju prikaza podataka
- @Directive i @ViewChild - za upravljanje HTML audio elementima
- @Output - za emitovanje custom dogadjaja, za potrebe zvucne signalizacije
- DomSanitizer - za URL-ove video snimaka, kako napadač ne bi mogao da ubaci JavaScript kod
- setInterval() - za računanje proteklog vremena. Ima 2 argumenta - f-ju i broj milisekundi. Iznova poziva f-ju nakon navedenog broja milisekundi. Vraća vrijednost tipa number, koja se koristi kao argument f-je clearInterval(), za zaustavljanje f-je setInterval()
- (window:keyup) - dogadjaj za pauziranje/nastavak treninga, klikom na odgovarajuci taster
