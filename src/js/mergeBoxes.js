import groupByAxis from './groupByAxis';

export const merge = (boxes, axis, toStart) => {
  let subArrays = groupByAxis(boxes, axis);
  if (!toStart) {
    subArrays = subArrays.map(arr => arr.reverse());
  }

  return subArrays
    .map(subArray => {
      let hasMerged = false;
      return subArray.reduce((prev, box, index, array) => {
        if (!hasMerged && prev.length > 0) {
          // Check if previous box has the same value
          const previousBox = prev[prev.length - 1];
          if (previousBox.value === box.value) {
            // merge last box with current box
            prev[prev.length - 1] = {
              ...previousBox,
              value: previousBox.value * 2,
            };
            hasMerged = true;
          } else {
            prev.push(box);
          }
        } else {
          prev.push(box);
        }
        return prev;
      }, []);
    })
    .map(subArray => (toStart ? subArray : subArray.reverse()))
    .reduce((a, b) => a.concat(b), []);
};

const mergeBoxes = (boxes, direction) => {
  switch (direction) {
    case 'UP':
      return merge(boxes, 'x', true);
    case 'DOWN':
      return merge(boxes, 'x', false);
    case 'LEFT':
      return merge(boxes, 'y', true);
    case 'RIGHT':
      return merge(boxes, 'y', false);
    default:
      throw new Error('invalid direction');
  }
};

export default mergeBoxes;
