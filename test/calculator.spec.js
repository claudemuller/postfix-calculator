const expect = require('chai').expect;

describe('Postfix Calculator', () => {
  describe('calculate function', () => {
    describe('given the arguments 5, 6, 7, *, +, 1, -', () => {
      it('should return 46', () => {
        const calculate = require('../index'),
          args = [5, 6, 7, '*', '+', 1, '-'],
          expected = 46;

        const actual = calculate(...args);

        expect(actual).to.equal(expected);
      });
    });

    describe('given the arguments 3, 10, 2, /, +, 2, %', () => {
      it('should return 0', () => {
        const calculate = require('../index'),
          args = [3, 10, 2, '/', '+', 2, '%'],
          expected = 0;

        const actual = calculate(...args);

        expect(actual).to.equal(expected);
      });
    });
  });
});
