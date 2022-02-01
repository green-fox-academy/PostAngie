'use strict';
import { Printable } from "./printable";

export class Todo implements Printable {
    private task: string;
    private priority: string;
    private isDone: boolean;

    constructor (task: string, priority: string = 'normal', isDone: boolean = false) {
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
    }

    printAllFields(): void {
        console.log('Task: ' + this.task + ' | Priority: ' + this.priority + ' | Done: ' + this.isDone);
    }

}