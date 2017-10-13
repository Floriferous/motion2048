import constants from '../config/constants';
const initialState = [];

const groupByRow = boxes => {
  const boxRows = [];
  boxes.forEach(box => {
    if (boxRows[box.y]) {
      boxRows[box.y].push(box);
    } else {
      boxRows[box.y] = [box];
    }
  });

  return boxRows;
};

const groupByColumn = boxes => {
  const boxColumns = [];
  boxes.forEach(box => {
    if (boxColumns[box.x]) {
      boxColumns[box.x].push(box);
    } else {
      boxColumns[box.x] = [box];
    }
  });

  return boxColumns;
};

export const getNewBoxDetails = (boxes, id) => {
  let firstIncompleteRow = 0;

  if (!boxes || boxes.length === 0) {
    return { id, x: 0, y: 0 };
  }

  // group boxes by row
  const boxRows = groupByRow(boxes);

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
    id,
    x: boxRows[firstIncompleteRow] ? boxRows[firstIncompleteRow].length : 0,
    y: firstIncompleteRow,
  };
};

const setDirection = (box, array, newDirection) => {
  let newX = box.x;
  let newY = box.y;

  if (newDirection === 'UP' || newDirection === 'DOWN') {
    const columnNb = box.x;
    const column = groupByColumn(array)[columnNb];
    if (newDirection === 'UP') {
      if (column[0].y === 0) {
        // Do nothing, position is already ok
      } else {
        const firstY = column[0].y;
        newY = box.y - firstY;
      }
    } else if (newDirection === 'DOWN') {
      if (column[0].y === constants.BOXES_PER_ROW - 1) {
        // Do nothing, position is already ok
      } else {
        const lastY = column[column.length - 1].y;
        newY = constants.BOXES_PER_ROW - (lastY - box.y);
      }
    }
  } else if (newDirection === 'LEFT' || newDirection === 'RIGHT') {
    const rowNb = box.y;
    const row = groupByRow(array)[rowNb];
    if (newDirection === 'LEFT') {
      if (row[0].x === 0) {
        // Do nothing, position is already ok
      } else {
        const firstX = row[0].x;
        newX = box.x - firstX;
      }
    } else if (newDirection === 'RIGHT') {
      if (row[0].x === constants.BOXES_PER_ROW - 1) {
        // Do nothing, position is already ok
      } else {
        const lastX = row[row.length - 1].x;
        newX = constants.BOXES_PER_ROW - (lastX - box.x);
      }
    }
  } else {
    throw Error('invalid new direction');
  }

  return { ...box, x: newX, y: newY };
};

const gameState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [...state, getNewBoxDetails(state, action.id)];
    case 'SET_DIRECTION':
      return state.map((box, i, array) =>
        setDirection(box, array, action.newDirection),
      );
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export default gameState;
