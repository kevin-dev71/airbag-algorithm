function cardsToScoreArr(blackjackHandArr) {
  const scoresTable = {
    A: [11, 1],
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  };

  const mappedHandScoreArr = blackjackHandArr.map((card) => {
    const value = scoresTable[card.toUpperCase()];
    if (!value) throw new Error('invalid input');
    return value;
  });

  return mappedHandScoreArr;
}

function getResultWithoutAs(arr) {
  return arr.reduce((acc, score) => {
    if (!Array.isArray(score)) {
      return acc + score;
    }
    return acc;
  }, 0);
}

function getResultOfAs(result, arrOfAs) {
  if (arrOfAs.length <= 0) return 0;

  const BLACKJACK_SCORE = 21;
  let accumulator = 0;
  let maxValueofAsUsed = 0;

  arrOfAs.forEach((item) => {
    const [maxValue, minValue] = item;
    if (result + maxValue + accumulator <= BLACKJACK_SCORE) {
      accumulator += maxValue;
      maxValueofAsUsed++;
    } else {
      accumulator += minValue;
    }
  });

  let handScore = accumulator + result;

  while (handScore > BLACKJACK_SCORE && maxValueofAsUsed > 0) {
    accumulator -= 10;
    handScore -= 10;
  }

  return accumulator;
}

function blackjack(blackjackHandArr) {
  // map cards scores
  const handScoresArr = cardsToScoreArr(blackjackHandArr);
  // Sort scores an let the As to the end
  const sortedScoresArr = handScoresArr.sort((a, b) => {
    if (!Array.isArray(a) && !Array.isArray(b)) return a - b;
    if (Array.isArray(a) && Array.isArray(b)) return 0;
    if (Array.isArray(a)) return 1;
    if (Array.isArray(b)) return -1;
  });
  // get sum value without As
  const resultWithoutAs = getResultWithoutAs(sortedScoresArr);

  // get best value of As
  const resultOfAs = getResultOfAs(
    resultWithoutAs,
    sortedScoresArr.filter((item) => Array.isArray(item))
  );

  return resultWithoutAs + resultOfAs;
}

module.exports = { blackjack, cardsToScoreArr };
