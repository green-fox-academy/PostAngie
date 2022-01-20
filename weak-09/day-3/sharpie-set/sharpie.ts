'use strict';

// Reuse your Sharpie class

export class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number;

    constructor (color: string, width: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }

    use (): number {
        return this.inkAmount -= 10;
    }

    getInkAmount () {
        return this.inkAmount;
    }
}