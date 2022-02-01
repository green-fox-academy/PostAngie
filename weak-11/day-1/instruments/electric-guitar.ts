'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {

    constructor (numberOfStrings: number = 6) {
        super ('Electric Guitar', numberOfStrings);
    }

    play(): void {
        console.log(this.name + ', a ' + this.numberOfStrings + '-stringed instrument that goes ' 
        + this.sound());
    }
    
    sound(): string {
        return 'Twang';
        
        
    }
}