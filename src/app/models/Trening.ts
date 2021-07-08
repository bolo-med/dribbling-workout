import { Vjezba } from "./Vjezba";

export class Trening {
    constructor(
        public nazivID: string,
        public naslov: string,
        public trajanjeOdmora: number,
        public brojOdmora: number,
        public vjezbe: Vjezba[],
        public opis?: string
    ) {}

    trajanjeTreninga(): number {
        if (!this.vjezbe) return 0;

        const trajanjeSvihVjezbi: number = this.vjezbe.map(vjezba => vjezba.trajanje).reduce((prethodna, trenutna) => prethodna + trenutna);

        return (this.trajanjeOdmora ? this.trajanjeOdmora : 0) * this.brojOdmora + trajanjeSvihVjezbi;
    }
}

