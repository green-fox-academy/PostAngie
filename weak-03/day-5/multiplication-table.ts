'use strict'

export function multiplicationTable (number: number) {
    let num: number = 15;
    let multiplier: number = 1;
    let sum: number;
    while (multiplier <= 10) {
        sum = num * multiplier
        console.log (multiplier + ' * ' + num + ' = ' + sum)
        multiplier++
    }
}