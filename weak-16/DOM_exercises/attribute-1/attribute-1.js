// Write the image's url to the console.
let image = document.querySelector('img');
console.log (image.src);

// Replace the image with a picture of your favorite animal.
image.src = './cat.webp';

// Make the link point to the Green Fox Academy website.
let link = document.querySelector('a');
link.href = 'https://www.greenfoxacademy.com/';

// Disable the second button.
let button2 = document.querySelector('.this-one');
button2.disabled = true;

// Replace its text with 'Don't click me!'.
button2.innerHTML = 'Don\'t click me!';