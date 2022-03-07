'use strict';

export class Random {

    getRandomHP() : number {
        let min = Math.ceil(1);
        let max = Math.floor(70);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    
    getRandomPower (): number {
        let min = Math.ceil(10);
        let max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
   
    getChance (): number {
        return Math.random() * 100;
    }

    getBinaryRandom (): number {
        let min = Math.ceil(0);
        let max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    getRandomCrewSize (): number {
        let min = Math.ceil(1);
        let max = Math.floor(113);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    getRandomRumConsuption (): number {
        let min = Math.ceil(1);
        let max = Math.floor(4);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}