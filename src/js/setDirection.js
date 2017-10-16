import constants from '../config/constants';
import groupByAxis from './groupByAxis';

const rearrangeBox = (box, boxes, axis, toStart) => {
  const subArray = groupByAxis(boxes, axis)[box[axis]];

  // If a row/column is full, don't rearrange any box
  if (subArray && subArray.length === constants.BOXES_PER_ROW) {
    return box;
  } else {
    // Find current position in row/column
    // Make sure array is sorted by its axis
    const axisToChange = axis === 'x' ? 'y' : 'x';
    const currentIndex = subArray
      ? subArray
          .sort((a, b) => a[axisToChange] - b[axisToChange])
          .findIndex(b => b.id === box.id)
      : 0;
    if (toStart) {
      // Push all boxes to beginning of row/column
      return { ...box, [axisToChange]: currentIndex };
    } else {
      // Push all boxes to end of row/column
      const reversedIndex =
        constants.BOXES_PER_ROW - (subArray.length - currentIndex);
      return { ...box, [axisToChange]: reversedIndex };
    }
  }
};

const setDirection = (box, boxes, newDirection) => {
  switch (newDirection) {
    case 'UP':
      return rearrangeBox(box, boxes, 'x', true);
    case 'DOWN':
      return rearrangeBox(box, boxes, 'x', false);
    case 'LEFT':
      return rearrangeBox(box, boxes, 'y', true);
    case 'RIGHT':
      return rearrangeBox(box, boxes, 'y', false);
    default:
      throw new Error('invalid direction' + newDirection);
  }
};

export default setDirection;
