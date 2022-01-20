'use strict';
import { Student } from "./student";

// Create Student and Teacher classes
// Teacher
// teach(student) -> calls the student's learn() method
// giveAnswer() -> prints: the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

export class Teacher {
    private subject: string;
    private answers: number;
    

    constructor (subject: string, answers: number = 0) {
        this.subject = subject;
        this.answers = answers;
    }

    giveAnswer () {
        this.answers += 1;
        console.log(this.subject + ' teacher is giving an answer. Number of answers is: ' + this.answers);
    }

    teach (who: Student){
        return who.learn();
    }
}