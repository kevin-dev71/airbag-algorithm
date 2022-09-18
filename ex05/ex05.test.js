// @ts-nocheck
const shiftCipher = require('./shiftCipher');

describe('ex05 shiftCipher file', () => {
  test('shiftCipher function should return "f" if they receive ("a", 5) as parameters', () => {
    const expected = 'f';
    const result = shiftCipher('a', 5);
    expect(expected).toBe(result);
  });

  test('shiftCipher function should return "g" if they receive ("b", 5) as parameters', () => {
    const expected = 'g';
    const result = shiftCipher('b', 5);
    expect(expected).toBe(result);
  });

  test('shiftCipher function should return "h" if they receive ("c", 5) as parameters', () => {
    const expected = 'h';
    const result = shiftCipher('c', 5);
    expect(expected).toBe(result);
  });

  test('shiftCipher function should return "c" if they receive ("x", 5) as parameters', () => {
    const expected = 'c';
    const result = shiftCipher('x', 5);
    expect(expected).toBe(result);
  });

  test('shiftCipher function should return "mtqf" if they receive ("hola", 5) as parameters', () => {
    const expected = 'mtqf';
    const result = shiftCipher('hola', 5);
    expect(expected).toBe(result);
  });

  test('shiftCipher function should return "MTQF" if they receive ("HOLA", 5) as parameters', () => {
    const expected = 'MTQF';
    const result = shiftCipher('HOLA', 5);
    expect(expected).toBe(result);
  });
});
