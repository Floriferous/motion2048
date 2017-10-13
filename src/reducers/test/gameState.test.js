/* eslint-env mocha */
import { expect } from 'chai';

import { getNewBoxDetails } from '../gameState';

describe('gameState reducers', () => {
  describe('getNewBoxDetails', () => {
    let boxes = [];

    it('returns the x=0 and y=0 if an empty array is provided', () => {
      expect(getNewBoxDetails(boxes, {})).to.deep.equal({ x: 0, y: 0 });
    });

    it('returns the x=0 and y=0 if nothing', () => {
      expect(getNewBoxDetails()).to.deep.equal({ x: 0, y: 0 });
    });

    it('returns a correct 7th box', () => {
      boxes = (new Array(6)).fill(undefined).map((_, i) => ({ x: i, y: 0 }));
      expect(getNewBoxDetails(boxes, {})).to.deep.equal({ x: 0, y: 1 });
    });
  });
});
