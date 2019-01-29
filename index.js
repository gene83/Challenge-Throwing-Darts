'use strict';

function scoreCalculator(arr) {
  if (!Array.isArray(arr)) {
    return 'This function only accepts arrays of numbers between 1 and 20.';
  }
  if (!arr.every(num => num < 21 && num > 0)) {
    return 'This function only accepts arrays of numbers between 1 and 20.';
  }
  if (arr.length === 0) {
    return -1;
  }

  let score = 0;

  arr.forEach(num => {
    if (num < 5) {
      score += 10;
    } else if (num > 4 && num < 11) {
      score += 5;
    }
  });

  if (arr.every(num => num < 5)) {
    score += 100;
  }

  return score;
}

module.exports = scoreCalculator;
