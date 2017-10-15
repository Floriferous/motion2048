/* eslint-env mocha */
import { expect } from 'chai';

import getNewBoxDetails from '../getNewBoxDetails';

describe('getNewBoxDetails', () => {
  let boxes = [];

  it('returns the x=0 and y=0 if an empty array is provided', () => {
    expect(getNewBoxDetails(boxes, {}).x).to.equal(0);
    expect(getNewBoxDetails(boxes, {}).y).to.equal(0);
  });

  it('returns the x=0 and y=0 if nothing', () => {
    expect(getNewBoxDetails().x).to.deep.equal(0);
    expect(getNewBoxDetails().y).to.deep.equal(0);
  });

  it('returns a correct 7th box', () => {
    boxes = new Array(6).fill(undefined).map((_, i) => ({ x: i, y: 0 }));
    expect(getNewBoxDetails(boxes, {}).x).to.deep.equal(0);
    expect(getNewBoxDetails(boxes, {}).y).to.deep.equal(1);
  });
});
