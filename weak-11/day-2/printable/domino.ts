'use strict';
import { Printable } from "./printable";

export class Domino implements Printable{
    private sideA: number;
    private sideB: number;

    constructor (sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    printAllFields(): void {
        console.log('Domino A side: ' + this.sideA + ', B side: ' + this.sideB);
    }

}