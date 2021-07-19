import { Vjezba } from './Vjezba';

export class TokVjezbeEvent {
    constructor(
        public vjezba: Vjezba, 
        public protekloVrijeme: number, 
        public preostaloVrijeme: number, 
        public preostaloVrijemeTreninga: number) {}
}

