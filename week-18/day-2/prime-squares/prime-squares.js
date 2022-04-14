// generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

let section = document.getElementsByTagName('section')[0];

function create100DivsWithClasses() {
    for (i = 1; i <= 100; i++) {
        let div = document.createElement("div");
        section.appendChild(div);
        div.textContent = i
        if (!isPrime(i)) {
            div.className = "not-prime";
        }
        else {
            div.className = "prime";
        }
    }
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    let q = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// create100Divs();

// Create a timer that keeps calling the prime validator function until it reaches the last element
// the timer should fire every 100ms
// the timer should stop when there are no more elements left to be colored

for (i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.textContent = i
    section.appendChild(div);
}

let divs = document.querySelectorAll("div");
console.log(divs)
let counter = 0;
const timer = setInterval(() => {
    let currentElement = divs[counter];
    const num = parseInt(currentElement.textContent);
    if (!isPrime(num)) {
        currentElement.classList.add("not-prime");
    }
    else {
        currentElement.classList.add("prime");
    }

    if (counter === divs.length - 1) {
        clearInterval(timer);
    }
    counter++;
}, 100);