// @ts-nocheck
const evalExpression = require('./evalExpression');

describe('ex02 evalExpression file', () => {
  test('evalExpression function should return 4 if they receive "2 + 2"', () => {
    const expected = 4;
    const input = '2 + 2';
    const result = evalExpression(input);
    expect(result).toBe(expected);
  });

  test('evalExpression function should return 6 if they receive "3 * 2"', () => {
    const expected = 6;
    const input = '3 * 2';
    const result = evalExpression(input);
    expect(result).toBe(expected);
  });

  test('evalExpression function should return undefined if they receive "function a() {}"', () => {
    const expected = undefined;
    const input = 'function a() {}';
    const result = evalExpression(input);
    expect(result).toBe(expected);
  });

  test('evalExpression function should return 4 if they receive "3 + 42 * (1 - 2 / (3 + 4) - 1 * 21) + 1"', () => {
    const expected = -848;
    const input = '3 + 42 * (1 - 2 / (3 + 4) - 1 * 21) + 1';
    const result = evalExpression(input);
    expect(result).toBe(expected);
  });
});
