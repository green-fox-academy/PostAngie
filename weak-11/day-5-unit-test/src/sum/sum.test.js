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


describe('Calculator', () => {
  let calculator = new Calculator();

  test('sum called with positive integer list returns correct sum', () => {
    let list = [4, 10, 25, 41];
    expect(calculator.sum(list)).toEqual(80);
  });

  test('sum called with empty list returns number 0', () => {
    expect(calculator.sum([])).toEqual(0);
  });

  test('sum called with negative and positive integers returns correct sum', () => {
    let negative = [-41, 41, -25, 25]
    expect(calculator.sum(negative)).toEqual(0);
  });

  test('sum called with list of on element returns the element as number', () => {
    let oneOnly = [41];
    expect(calculator.sum(oneOnly)).toEqual(41);
  });
});