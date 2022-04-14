// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// Extra: create an interval which will update the remaining seconds in the display

let display = document.querySelector('.display');
let counter = 10;
const countDown = setInterval(() => {
    display.textContent = counter
    if (counter === 0) {
        clearInterval(countDown);
        display.textContent = "Bomb exploded";
    }
    counter--;
},
    1000
);

// If you click on the button set the display to "Bomb defused" and stop the timeout
let button = document.querySelector('button');
button.onclick = function () {
    display.textContent = "Bomb defused";
    clearInterval(countDown);
}