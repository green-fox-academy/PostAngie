'use strict';

// Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a number) and the
// inkAmount (another number)
// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10

export class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number;

    constructor (color: string, width: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }

    use () {
        return this.inkAmount -= 10;
    }
}