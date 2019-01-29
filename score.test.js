'use strict';

const chai = require('chai');
const scoreCalculator = require('./index.js');

const expect = chai.expect;

describe('scoreCalculator', function() {
  it('should only accept an array of numbers between 1 and 20', function() {
    expect(scoreCalculator([1, 5, 21, -1])).to.equal(
      'This function only accepts arrays of numbers between 1 and 20.'
    );

    expect(scoreCalculator({ test: 'object' })).to.equal(
      'This function only accepts arrays of numbers between 1 and 20.'
    );
    expect(scoreCalculator('1, 5, 20, 18')).to.equal(
      'This function only accepts arrays of numbers between 1 and 20.'
    );
  });

  it('should return -1 if passed an empty array', function() {
    expect(scoreCalculator([])).to.equal(-1);
  });

  it('should calculate scores based on the specification, above 10: 0pts, 5-10 inclusive: 5 pts, and under 5: 10pts', function() {
    expect(scoreCalculator([1, 2, 3, 4, 5])).to.equal(45);
    expect(scoreCalculator([5, 6, 7, 8, 9, 10])).to.equal(30);
    expect(scoreCalculator([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).to.equal(
      0
    );
  });

  it('should add 100 bonus points if all radiuses are less than 5', function() {
    expect(scoreCalculator([1, 2, 3, 4])).to.equal(140);
    expect(scoreCalculator([1, 2, 3, 4, 12])).to.equal(40);
  });
});
