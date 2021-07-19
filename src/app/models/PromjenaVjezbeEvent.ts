import { Vjezba } from "./Vjezba";

export class PromjenaVjezbeEvent {
    constructor(
        public trenutna: Vjezba, 
        public sledeca: Vjezba
    ) {}
}

