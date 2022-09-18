function hasRepeatedChar(word) {
  if (!word) throw new Error('Invalid argument');
  const chars = [...word];
  return new Set(chars).size !== word.length;
}

function hasCombination(word, object) {
  const sortedWord = [...word].sort((a, b) => a - b).join('');
  return object.hasOwnProperty(sortedWord);
}

function printCombinations() {
  const result = {
    '012': '',
  };

  for (let d1 = 0; d1 <= 9; d1++) {
    for (let d2 = 1; d2 <= 9; d2++) {
      for (let d3 = 3; d3 <= 9; d3++) {
        const numString = '' + d1 + d2 + d3;
        if (!hasRepeatedChar(numString) && !hasCombination(numString, result))
          result[numString] = '';
      }
    }
  }

  const resultArr = Object.keys(result)
    .sort((a, b) => a - b)
    .join(', ');

  return resultArr;
}

module.exports = { printCombinations, hasCombination, hasRepeatedChar };
