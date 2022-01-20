'use strict';
import { Student } from "./student";
import { Teacher } from "./teacher";

// Instantiate a Student and Teacher object

function initializeTeacher(): Teacher[] {
    return [
        new Teacher('Math'),
        new Teacher('Typescript'),
        new Teacher('English')
    ]
}
let faculty: Teacher[] = initializeTeacher();

function initializeStudent(): Student[] {
    return [
        new Student('Steve'),
        new Student('Pete'),
        new Student('Mark')
    ]
}
let ourClass: Student[] = initializeStudent();

// Call the student's question() method and the teacher's teach() method

for (let i = 0; i < ourClass.length; i++) {
    for (let j = 0; j < faculty.length; j++) {
        ourClass[i].askQuestion(faculty[j]);
        faculty[i].teach(ourClass[j]);
    }
}