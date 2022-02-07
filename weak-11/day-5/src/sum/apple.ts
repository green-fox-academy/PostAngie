'use strict';

// Create a class with one method (eg. getApple()) that returns a string (eg. 'apple')
// Create a sum method in your class which has a list of integers as parameter. 
// It should return the sum of the elements in the list

export class Apple {
    getApple(): string {
        return 'apple';
    }

    sumApples(list: Apple []): number {
        return list.length;

    }
}