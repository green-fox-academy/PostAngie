'use strict';

import { Animal } from "./animal";

export class Reptile extends Animal{
     private scaleColor: string = '';
    
    constructor (name: string) {
        super(name);
    }

    setScaleColor (color: string): void {
        this.scaleColor = color;
    }

    getScaleColor (): string {
        return this.scaleColor;
    }

    breed(): string {
        return 'laying eggs';
    }
}