const should = require('should');
const lib = require('../lib/lib');

describe('Lib tests', () => {
  describe('calculateLongestSet() should', () => {
    let input = [];
    let min = 0;
    beforeEach(() => {
      min = 30;
      input = [
        ['Hello','Man'],
        ['Photographer','Danwakeem'],
        ['Softare','NPM Pack'],
        ['Errors','10'],
      ];
    });

    it('Return min value', () => {
      lib.calculateLongestSet(input, min).should.equal(min);
    });

    it('Return value of (input[1][0].len + input[1][1].len + 1)', () => {
      min = 0;
      lib.calculateLongestSet(input, min).should.equal(input[1][0].length + input[1][1].length + 1);
    });

    it('Throw error', () => {
      input = '';
      try {
        lib.calculateLongestSet(input, min)
        false.should.equal(true);
      } catch (e) {
        e.should.deepEqual({ message: 'Invalid input type' });
      } 
    });
  });

  describe('createOutput() should', () => {
    let input = [];
    let min = 0;
    beforeEach(() => {
      min = 30;
      input = [
        ['Hello','Man'],
        ['Photographer','Danwakeem'],
        ['Softare','NPM Pack'],
        ['Errors','10'],
      ];
    });

    it('Return format string', () => {
      lib.createOutput(input, min).should.equal('Hello......................Man\nPhotographer.........Danwakeem\nSoftare...............NPM Pack\nErrors......................10')
    });

    it('Throw error', () => {
      input = '';
      try {
        lib.createOutput(input, min)
        false.should.equal(true);
      } catch (e) {
        e.should.deepEqual({ message: 'Invalid input type' });
      } 
    });
  });
});