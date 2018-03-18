const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
  describe('seconds', () => {
    it('should return seconds', () => {
  		const actual = formatDate(23);

  		const expected = '23s';

  		assert.equal(actual, expected);
	});
	it('should return 0 seconds if no value is passed', () => {
  		const actual = formatDate();

  		const expected = '0s';

  		assert.equal(actual, expected);
	});
  });

  describe('minutes', () => {
    it('should work for one digit minutes and seconds', () => {
  		const actual = formatDate(93);

  		const expected = '1m 33s';

  		assert.equal(actual, expected);
	});
	it('should work for two digits minutes and seconds', () => {
  		const actual = formatDate(693);

  		const expected = '11m 33s';

  		assert.equal(actual, expected);
	});
	it('should return only minutes', () => {
  		const actual = formatDate(600);

  		const expected = '10m';

  		assert.equal(actual, expected);
	});
  });

  describe('hours', () => {
    it('should return hours', () => {
  		const actual = formatDate(23);

  		const expected = '0 hours 0 minutes 23s';

  		assert.equal(actual, expected);
	});
  });
});