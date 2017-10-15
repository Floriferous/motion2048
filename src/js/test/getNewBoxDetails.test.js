/* eslint-env mocha */
import { expect } from 'chai';
import constants from '../../config/constants';

import getNewBoxDetails from '../getNewBoxDetails';

describe('getNewBoxDetails', () => {
  let boxes = [];

  it('returns the x=0 and y=0 if an empty array is provided', () => {
    expect(getNewBoxDetails(boxes, {}).x).to.equal(0);
    expect(getNewBoxDetails(boxes, {}).y).to.equal(0);
  });

  it('returns the x=0 and y=0 if nothing', () => {
    expect(getNewBoxDetails().x).to.equal(0);
    expect(getNewBoxDetails().y).to.equal(0);
  });

  it('returns a correct n-th box', () => {
    boxes = new Array(constants.BOXES_PER_ROW)
      .fill(undefined)
      .map((_, i) => ({ x: i, y: 0 }));
    expect(getNewBoxDetails(boxes, {}).x).to.equal(0);
    expect(getNewBoxDetails(boxes, {}).y).to.equal(1);
  });
});
