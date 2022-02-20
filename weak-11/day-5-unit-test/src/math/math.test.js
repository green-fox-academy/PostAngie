import { addNum, divide, isPrime } from './math'

test('adNum with two positive integer returns valid result', () => {
  expect(addNum(1, 2)).toBe(3);
});

// Test every method with correct input parameters
// Test if the divide method throws an exception if b is 0

test ('divide with positive integers return valid result', () => {
  expect(divide(10,2)).toBe(5);
});

test ('divide by 0 throw an error', () => {
  expect(() => {
    divide(10,0);
  }).toThrowError();
});

test ('isPrime called with 1 is false', () => {
  expect (isPrime(1)).toBeFalsy();
});

test ('isPrime called with prime is true', () => {
  expect (isPrime(2)).toBeTruthy();
});


