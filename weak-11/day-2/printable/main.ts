'use strict';
import { Domino} from "./domino";
import {Todo } from './todo';


// Create a new class called Domino that has two integer fields that represents the two sides of a 
// domino
// Create a new class called Todo that has three fields representing the task as a string, 
// the priority as string and whether it is done or not as a boolean
// Create a new interface called Printable
// It should have one method definition called printAllFields
// Implement this interface on the Domino and Todo classes
// The domino should have the following string representation: Domino A side: 3, B side: 2
// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true
function initializeDominoes(): Domino [] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function initializeTodos(): Todo [] {
    let todos = [];
    todos.push(new Todo('Buy milk', 'high'));
    todos.push(new Todo('Git push'));
    todos.push(new Todo('Call teacher', 'low', true));
    return todos;
}


let dominoes = initializeDominoes();
let todos = initializeTodos();

for (let domino of dominoes) {
    domino.printAllFields();
  }

for (let todo of todos) {
    todo.printAllFields();
  }