import constants from '../config/constants';
const initialState = [];

export const getNewBoxDetails = (boxes, newBox) => {
  console.log(boxes);
  const boxRows = [];
  let firstIncompleteRow = 0;

  if (!boxes || boxes.length === 0) {
    return {
      ...newBox,
      x: 0,
      y: 0,
    };
  }

  // group boxes by row
  boxes.forEach(box => {
    if (boxRows[box.y]) {
      boxRows[box.y].push(box);
    } else {
      boxRows[box.y] = [box];
    }
  });

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
    ...newBox,
    x: boxRows[firstIncompleteRow] ? boxRows[firstIncompleteRow].length : 0,
    y: firstIncompleteRow,
  };
};

const gameState = (state = initialState, { type, ...actionContent }) => {
  switch (type) {
    case 'ADD_BOX':
      return [...state, getNewBoxDetails(state, actionContent)];
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export default gameState;
