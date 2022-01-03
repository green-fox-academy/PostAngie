'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let temp: string = quote.substring(0, quote.indexOf('you'));
quote = quote.substring(quote.indexOf('you'));
quote = temp + "always takes longer than " + quote

console.log(quote);