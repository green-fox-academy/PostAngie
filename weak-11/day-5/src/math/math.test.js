import { addNum, divide, isPrime } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

// Test every method with correct input parameters
// Test if the divide method throws an exception if b is 0

test ('divide 10 with 2 equal 5', () => {
  expect(divide(10,2)).toBe(5);
});

test ('divide by 0 throw an error', () => {
  expect(() => {
    divide(10,0);
  }).toThrowError();
});

test ('1 is not a prime', () => {
  expect (isPrime(1)).toBeFalsy();
});

test ('2 is a prime', () => {
  expect (isPrime(2)).toBeTruthy();
});


