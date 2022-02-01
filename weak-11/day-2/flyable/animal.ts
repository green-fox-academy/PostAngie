'use strict';

export abstract class Animal {
    private name: string;
    private age: number = 0;
    private habitat: string = '';
    private gender: string = '';

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setHabitat (place: string): void {
        this.habitat = place;
    }
    
    getHabitat (): string {
        return this.habitat;
    }

    setGender (gender: string): void {
        this.gender = gender;
    }

    getGender (): string {
        return this.gender;
    }
    
    abstract breed(): string;
}