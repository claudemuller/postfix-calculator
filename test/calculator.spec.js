const expect = require('chai').expect;

describe('Postfix Calculator', () => {
  describe('calculate function', () => {
    describe('given the arguments 5, 6, 7, *, +, 1, -', () => {
      it('should return 46', () => {
	const calculate = require('../main'),
          args = [5, 6, 7, '*', '+', 1, '-'],
	  expected = 46;

	const actual = calculate(args);
	      console.log(actual);

	expect(expected).to.equal(actual);
      });
    });
  });
});
