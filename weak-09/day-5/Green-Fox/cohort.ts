'use strict';
import { Student } from "./student";
import { Mentor } from "./mentor";

export class Cohort {
    protected name: string;
    protected students: Student [];
    protected mentors: Mentor [];

    constructor (name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }
    addStudent (student: Student) {
        return this.students.push(student);
    }

    addMentor (mentor: Mentor) {
        return this.mentors.push(mentor);
    }

    info () {
        console.log('The ' +this.name + ' cohort has ' + this.students.length + ' students and ' +
        this.mentors.length + ' mentors.');
    }
}