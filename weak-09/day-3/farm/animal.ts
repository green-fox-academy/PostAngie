'Use strict';

// Reuse your Animal class

export class Animal {
    private hungerValue: number;
    private thirstValue: number;

    constructor (hungerValue: number = 50, thirstValue: number = 50){
        this.hungerValue = hungerValue;
        this.thirstValue = thirstValue;
    }

    eat () {
        return this.hungerValue -= 1;
    }

    drink () {
        return this.thirstValue -=1;
    }

    play () {
        return this.hungerValue += 1, this.thirstValue += 1;
    }

    getHungerValue () {
        return this.hungerValue;
    }
}