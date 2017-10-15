/* eslint-env mocha */
import { expect } from 'chai';

import mergeBoxes from '../mergeBoxes';

describe('mergeBoxes', () => {
  let boxes;
  beforeEach(() => {
    boxes = [{ x: 0, y: 0, value: 100 }, { x: 3, y: 0, value: 100 }];
  });

  it('do nothing if only one box', () => {
    const merged = mergeBoxes(boxes.slice(0, 1), 'LEFT');
    expect(merged).to.deep.equal([{ x: 0, y: 0, value: 100 }]);
  });

  it('merges 2 simple boxes', () => {
    const merged = mergeBoxes(boxes, 'LEFT');
    expect(merged).to.deep.equal([{ x: 0, y: 0, value: 200 }]);
  });

  it('merges 3 boxes into 2', () => {
    boxes.push({ x: 5, y: 0, value: 100 });
    const merged = mergeBoxes(boxes, 'LEFT');
    expect(merged).to.deep.equal([
      { x: 0, y: 0, value: 200 },
      { x: 5, y: 0, value: 100 },
    ]);
  });

  it('merges 3 boxes into 1', () => {
    boxes.push({ x: 5, y: 0, value: 200 });
    const merged = mergeBoxes(boxes, 'LEFT');
    expect(merged).to.deep.equal([{ x: 0, y: 0, value: 400 }]);
  });

  it('merges 2 boxes backwards', () => {
    const merged = mergeBoxes(boxes, 'RIGHT');
    expect(merged).to.deep.equal([{ x: 3, y: 0, value: 200 }]);
  });

  it('merges 2 boxes backwards, without reversing array', () => {
    boxes = [{ x: 0, y: 0, value: 100 }, { x: 5, y: 0, value: 200 }];
    const merged = mergeBoxes(boxes, 'RIGHT');
    expect(merged).to.deep.equal([
      { x: 0, y: 0, value: 100 },
      { x: 5, y: 0, value: 200 },
    ]);
  });
});
