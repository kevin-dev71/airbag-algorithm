// @ts-nocheck
const { blackjack, cardsToScoreArr } = require('./blackjack');

describe('ex03 blackjack file', () => {
  test('cardsToScoreArr function should return [[1, 11], 2, 10] if they receive ["A", "2", "K"] array', () => {
    const expected = [[11, 1], 2, 10];
    const input = ['A', '2', 'K'];

    const result = cardsToScoreArr(input);
    expect(result).toEqual(expected);
  });

  test('cardsToScoreArr function should return [[1, 11], 2, 3, 10, 10] if they receive ["A", "2", "3", "k", "j"] array', () => {
    const expected = [[11, 1], 2, 3, 10, 10];
    const input = ['A', '2', '3', 'k', 'j'];

    const result = cardsToScoreArr(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 13 if they receive ["A", "2", "K"] array', () => {
    const expected = 13;
    const input = ['A', '2', 'K'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 6 if they receive ["2", "4"] array', () => {
    const expected = 6;
    const input = ['2', '4'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 18 if they receive ["Q", "8"] array', () => {
    const expected = 18;
    const input = ['Q', '8'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 15 if they receive ["A", "4"] array', () => {
    const expected = 15;
    const input = ['A', '4'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 21 if they receive ["A", "K"] array', () => {
    const expected = 21;
    const input = ['A', 'K'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 12 if they receive ["A", "A", "J"] array', () => {
    const expected = 12;
    const input = ['A', 'A', 'J'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 20 if they receive ["A", "A", "8"] array', () => {
    const expected = 20;
    const input = ['A', 'A', '8'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 22 if they receive ["3", "3", "9", "A", "6"] array', () => {
    const expected = 22;
    const input = ['3', '3', '9', 'A', '6'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 4 if they receive ["A", "A", "A", "A"] array', () => {
    const expected = 14;
    const input = ['A', 'A', 'A', 'A'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });

  test('blackjack function should return 4 if they receive ["A", "A", "A", "A", "A", "A", "A", "a"] array', () => {
    const expected = 18;
    const input = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'a'];

    const result = blackjack(input);
    expect(result).toEqual(expected);
  });
});
