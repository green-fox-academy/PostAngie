'use strict';
import { Person } from "./person";

export class Student extends Person {
    protected previousOrganization: string;
    protected skippedDays: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
        previousOrganization: string = 'The School of Life') {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    introduce() {
        console.log(super.getIntroduction() + ' from ' + this.previousOrganization 
        + ' who skipped ' + this.skippedDays + ' days from the the course already.');
    }

    getGoal() {
        console.log("My goal is: Be a junior software developer.");
    }

    skipDays(numberOfDays: number) {
        return this.skippedDays += numberOfDays;
    }
}