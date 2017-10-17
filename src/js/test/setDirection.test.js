/* eslint-env mocha */
import { expect } from 'chai';
import constants from '../../config/constants';

import setDirection from '../setDirection';

describe('setDirection', () => {
  const box = { id: 0, x: 0, y: 0 };
  it('does nothing to a box at 0,0', () => {
    expect(setDirection(box, [box], 'UP')).to.deep.equal(box);
  });

  it('puts a box at the end of its row', () => {
    expect(setDirection(box, [box], 'DOWN')).to.deep.equal({
      id: 0,
      x: 0,
      y: constants.BOXES_PER_ROW - 1,
    });
  });
});
