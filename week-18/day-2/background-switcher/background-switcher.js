// Create a function that updates the background-image of the <body> element
// The image value should be https://loremflickr.com/g/1280/800/hungary/
// Create a timer function that refreshes the background every 5 seconds

let body = document.querySelector('body');
body.style.backgroundImage = "url('https://loremflickr.com/g/1280/800/hungary/')";
counter = 0;

let interval = setInterval(() => {
    location.reload();

    if (counter === 10) {
        clearInterval(interval);
    }
    counter++;
}, 5000);

// Make sure every time you refresh the image, you add a cachebuster. WTF is a cachebuster?
        // Ez nincs kész! Hogy kell?