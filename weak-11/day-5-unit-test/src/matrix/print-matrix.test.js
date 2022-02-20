import { printMatrix } from "./print-matrix";

test('printMatrix called with equal numbers create a matrix', () => {
    expect((printMatrix(3, 3)).length).toEqual(3);
  });

test('printMatrix called with 4 creates a symmetric matrix', () => {
    let expected = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
    expect(printMatrix(4, 4)).toEqual(expected);
  });