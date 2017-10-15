import constants from '../config/constants';
import groupByKey from './groupByKey';

// From stack overflow
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const getUid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const getNewBoxDetails = (boxes = []) => {
  let firstIncompleteRow = 0;
  let newX = 0;
  let id = getUid();

  if (!boxes || boxes.length === 0) {
    return { id, x: 0, y: 0 };
  }

  // group boxes by row
  const boxRows = groupByKey(boxes, 'y');

  // Find first incomplete row
  boxRows.every((row, i) => {
    if (row && row.length === constants.BOXES_PER_ROW) {
      firstIncompleteRow += 1;
      return true;
    }

    return false;
  });

  // Find first place in the row
  const row = boxRows[firstIncompleteRow];
  if (row && row[0].x === 0) {
    newX = row[row.length - 1].x + 1;
  }

  // Return a box with its new coordinates
  return {
    id,
    x: newX,
    y: firstIncompleteRow,
  };
};

export default getNewBoxDetails;
