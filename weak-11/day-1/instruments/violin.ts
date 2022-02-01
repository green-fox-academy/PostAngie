'use strict';
import { StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {

    constructor (numberOfStrings: number = 4) {
        super ('Violin', numberOfStrings);
    }

    play(): void {
        console.log(this.name + ', a ' + this.numberOfStrings + '-stringed instrument that goes ' 
        + this.sound());
    }
    
    sound(): string {
        return 'Screech';
        
    }
}