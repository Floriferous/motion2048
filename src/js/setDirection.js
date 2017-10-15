import constants from '../config/constants';
import groupByKey from './groupByKey';

const rearrangeBox = (box, array, axis, toStart) => {
  const subArray = groupByKey(array, axis)[box[axis]];

  if (subArray && subArray.length === constants.BOXES_PER_ROW) {
    return box;
  } else {
    const currentIndex = subArray
      ? subArray.findIndex(b => b.id === box.id)
      : 0;
    const axisToChange = axis === 'x' ? 'y' : 'x';
    if (toStart) {
      return { ...box, [axisToChange]: currentIndex };
    } else {
      const reversedIndex =
        constants.BOXES_PER_ROW - (subArray.length - currentIndex);
      return { ...box, [axisToChange]: reversedIndex };
    }
  }
};

const setDirection = (box, array, newDirection) => {
  switch (newDirection) {
    case 'UP':
      return rearrangeBox(box, array, 'x', true);
    case 'DOWN':
      return rearrangeBox(box, array, 'x', false);
    case 'LEFT':
      return rearrangeBox(box, array, 'y', true);
    case 'RIGHT':
      return rearrangeBox(box, array, 'y', false);
    default:
      throw new Error('invalid direction');
  }
};

export default setDirection;
