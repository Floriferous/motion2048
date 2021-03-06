import constants from '../config/constants';
import groupByAxis from './groupByAxis';

// From stack overflow
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const getUid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const getNewBoxDetails = (boxes = []) => {
  let firstIncompleteRow = 0;
  let newX = 0;
  const id = getUid();
  const initialValue = constants.INITIAL_VALUE;

  if (!boxes || boxes.length === 0) {
    return {
      id,
      x: 0,
      y: 0,
      value: initialValue,
    };
  }

  // group boxes by row
  const boxRows = groupByAxis(boxes, 'y');

  // Find first incomplete row
  for (let i = 0; i < constants.BOXES_PER_ROW; i += 1) {
    const row = boxRows[i];
    if (row && row.length === constants.BOXES_PER_ROW) {
      firstIncompleteRow += 1;
    } else {
      break;
    }
  }

  // Find first place in the row
  const row = boxRows[firstIncompleteRow];
  if (row && row.length) {
    const rowX = row.map(box => box.x);
    for (let i = 0; i < constants.BOXES_PER_ROW; i += 1) {
      if (rowX.findIndex(x => x === i) < 0) {
        // found x that isn't taken
        newX = i;
        break;
      }
    }
  }

  // Return a box with its new coordinates
  return {
    id,
    x: newX,
    y: firstIncompleteRow,
    value: initialValue,
  };
};

export default getNewBoxDetails;
