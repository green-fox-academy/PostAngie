'Use strict';
// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// When creating a new animal instance these values must be set to the default 50 value
// Every animal can eat() which decreases its hunger by one
// Every animal can drink() which decreases its thirst by one
// Every animal can play() which increases both its hunger and thirst by one

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

    getThirstValue () {
        return this.thirstValue;
    }
}