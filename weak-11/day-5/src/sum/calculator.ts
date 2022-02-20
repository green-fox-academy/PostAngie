'use strict';

export class Calculator {
    
    constructor () {
        
    }
    
    sum (listOfNumbers: number []): number {
        let sum: number = 0;
        listOfNumbers.forEach (element => {
            sum += element
        });
        return sum;
    }
}