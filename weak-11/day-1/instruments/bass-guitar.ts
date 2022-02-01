'use strict';
import { StringedInstrument } from "./stringed-instrument";

export class BassGuitar extends StringedInstrument {

    constructor (numberOfStrings: number = 4) {
        super ('Bass Guitar', numberOfStrings);
    }

    play(): void {
        console.log(this.name + ', a ' + this.numberOfStrings + '-stringed instrument that goes ' 
        + this.sound());
    }
    
    sound(): string {
        return 'Duum-duum-duum';
    }
}