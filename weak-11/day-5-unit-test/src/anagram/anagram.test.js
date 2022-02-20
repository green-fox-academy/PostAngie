import { checkIfAnagrams } from "./anagram";

test('checkIfAnagrams called with two string anagrams returns true', () => {
    expect(checkIfAnagrams('apple', 'elppa')).toBeTruthy();
  });

  test('checkIfAnagrams called with two string not anagrams returns false', () => {
    expect(checkIfAnagrams('apple', 'prio')).toBeFalsy();
  });

  test('checkIfAnagrams called with two numbers gives false', () => {
    expect(checkIfAnagrams(123,123)).toBeFalsy();
  });

  test('checkIfAnagrams called with undefined gives false', () => {
    let text1;
    let text2;
    expect(checkIfAnagrams(text1, text2)).toBeFalsy();
});