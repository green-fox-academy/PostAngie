'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let toConnect1: number [][] = [[10, 10], [290,  10], [290, 290], [10, 290],[10,10]] // én írtam be a végére a nyitót zárónak...
let toConnect2: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
[120, 100], [85, 130], [50, 100]]

function connectTheDots (list: number [][]): void {
    for (let i=0; i< list.length; i++){
        ctx.beginPath();
        ctx.moveTo(list[i][0], list[i][1]);
        ctx.lineTo(list[i+1] [0], list [i+1] [1]);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();
    }
}    

//connectTheDots(toConnect1)
connectTheDots(toConnect2)