'use strict';
// Create Student and Teacher classes
// Student
// learn() -> prints: the student is actually learning
// question(teacher) -> calls the teacher's giveAnswer() method
// Teacher
// teach(student) -> calls the student's learn() method
// giveAnswer() -> prints: the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

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

export class Teacher {
    private subject: string;
    private answers: number;
    

    constructor (subject: string, answers: number = 0) {
        this.subject = subject;
        this.answers = answers;
    }

    giveAnswer () {
        this.answers += 1
        console.log(this.subject + ' teacher is giving an answer. Number of answers is: ' + this.answers);
    }

    teach (who: Student){
        return who.learn();
    }
}