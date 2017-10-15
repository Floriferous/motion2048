const groupByKey = (boxes, key) => {
  const boxRows = [];
  boxes.forEach(box => {
    if (boxRows[box[key]]) {
      boxRows[box[key]].push(box);
    } else {
      boxRows[box[key]] = [box];
    }
  });

  return boxRows;
};

export default groupByKey;
