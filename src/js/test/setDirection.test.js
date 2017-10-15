/* eslint-env mocha */
import { expect } from 'chai';

import setDirection from '../setDirection';

describe('setDirection', () => {
  let box = { id: 0, x: 0, y: 0 };
  it('does nothing to a box at 0,0', () => {
    expect(setDirection(box, [box], 'UP')).to.deep.equal(box);
  });

  it('puts a box at the end of its row', () => {
    expect(setDirection(box, [box], 'DOWN')).to.deep.equal({
      id: 0,
      x: 0,
      y: 5,
    });
  });
});
