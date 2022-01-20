'use strict';
import { Teacher } from "./teacher";

// Create Student and Teacher classes
// Student
// learn() -> prints: the student is actually learning
// question(teacher) -> calls the teacher's giveAnswer() method


export class Student {
    private name: string;
    private level: number;

    constructor (name: string, level: number = 0) {
        this.name = name;
        this.level = level;
    }

    learn () {
        this.level += 10
        console.log(this.name + ' is learning. Actual level is: ' + this.level);
    }

    askQuestion (who: Teacher) {
        return who.giveAnswer();
    }
}