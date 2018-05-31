const should = require('should');
const proxyquire = require('proxyquire');
const index = require('../index');

describe('Index tests', () => {
  describe('Index function should', () => {
    let params = {};
    beforeEach(() => {
      params = {
        min: 30,
        input: [
          ['Hello','Man'],
          ['Photographer','Danwakeem'],
          ['Softare','NPM Pack'],
          ['Errors','10'],
        ]
      };
    });

    it('Return the main return string', () => {
      index(params).should.equal('Hello......................Man\nPhotographer.........Danwakeem\nSoftare...............NPM Pack\nErrors......................10');
    });

    it('Return an error', () => {
      params.input = 'INVALID';
      index(params).should.deepEqual({ error: 'INVALID_INPUT' });
    });

    it('Return message with only 1 dot between the words on the second line', () => {
      params.min = 10;
      index(params).should.equal('Hello..............Man\nPhotographer.Danwakeem\nSoftare.......NPM Pack\nErrors..............10');
    });

    it('Return message with only 1 dot between the words on the second line', () => {
      params.min = '30';
      index(params).should.deepEqual({ error: 'Invalid min type' });
    });
  });
});