const groupByAxis = (boxes, axis) => {
  const boxRows = [];
  boxes.forEach(box => {
    if (boxRows[box[axis]]) {
      boxRows[box[axis]].push(box);
    } else {
      boxRows[box[axis]] = [box];
    }
  });

  // Sort boxes in proper order
  const axisToChange = axis === 'x' ? 'y' : 'x';
  return boxRows.map(row =>
    row.sort((a, b) => a[axisToChange] - b[axisToChange]),
  );
};

export default groupByAxis;
