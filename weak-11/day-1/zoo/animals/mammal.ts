'use strict';
import { Animal } from "./animal";

export class Mammal extends Animal {
    private hairColor: string = '';

    constructor(name: string) {
        super(name);
    }

    setHairColor (color: string): void {
        this.hairColor = color;
    }

    getHairColor (): string {
        return this.hairColor;
    }

    breed(): string {
        return 'pushing miniature versions out.';
    }
}