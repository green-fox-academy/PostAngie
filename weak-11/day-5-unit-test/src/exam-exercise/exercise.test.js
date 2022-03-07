import { functionName } from "./exercise";

test('functionName ... ', () => {
    let input = "I hope my method works fine";
    expect(countLetters(input)).toHaveProperty("p");
  });

  test('countLetters with string input counts letters correctly', () => {
    let input = "aaa bbb ccc";
    let result = {'a': 3, 'b': 3, 'c': 3};
    expect(countLetters(input)).toEqual(result);
  });

  test ('countLetters called with string returns an object', () => {
    let input = 'aaa bbb';
    expect(countLetters(input)).toBeDefined();
  });

  test ('countLetters called with numbers throws error', () => {
    let input = 12345678;
    expect(() => {
      countLetters(input);
    }).toThrow();
  });

  test ('countLetters shows this error message: Please give a string type parameter!', () => {
    expect(countLetters).toThrowError('Please give a string type parameter!');
  });