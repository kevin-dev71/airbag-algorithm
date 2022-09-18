// @ts-nocheck
const clearDuplicates = require('./clearDuplicates');

describe('ex03 clearDuplicates file', () => {
  test('clearDuplicates function should return [4, 3, 1, 7, 8] array if they receive [4, 3, 4, 3, 1, 7, 8, 8] array', () => {
    const expected = [4, 3, 1, 7, 8];
    const input = [4, 3, 4, 3, 1, 7, 8, 8];

    const result = clearDuplicates(input);
    expect(result).toEqual(expected);
  });

  test('clearDuplicates function should return [1] array if they receive [1, 1 , 1, 1] array', () => {
    const expected = [1];
    const input = [1, 1, 1, 1];

    const result = clearDuplicates(input);
    expect(result).toEqual(expected);
  });
});
