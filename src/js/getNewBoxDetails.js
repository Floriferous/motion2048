import constants from '../config/constants';
import groupByKey from './groupByKey';

const getNewBoxDetails = (boxes = []) => {
  let firstIncompleteRow = 0;

  if (!boxes || boxes.length === 0) {
    return { id: 0, x: 0, y: 0 };
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

  // Return a box with its new coordinates
  return {
    id: boxes.length,
    x: boxRows[firstIncompleteRow] ? boxRows[firstIncompleteRow].length : 0,
    y: firstIncompleteRow,
  };
};

export default getNewBoxDetails;
