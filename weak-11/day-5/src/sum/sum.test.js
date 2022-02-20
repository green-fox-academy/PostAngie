import { Calculator } from "./calculator";

// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the toEqual() matcher to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed
let calculator = new Calculator();
let list = [4, 10, 25, 41];
let emptyList = [];
let oneOnly = [41];
let negative = [-41, 41, -25, 25]


test('sum of integer list is 80', () => {
  expect(calculator.sum(list)).toEqual(80);
});

test('sum of empty list is 0', () => {
  expect(calculator.sum(emptyList)).toEqual(0);
});

test ('sum of negative and positive integers is 0', () => {
  expect(calculator.sum(negative)).toEqual(0);
});

test ('sum of 1 element is the element', () => {
  expect(calculator.sum(oneOnly)).toEqual(41);
});