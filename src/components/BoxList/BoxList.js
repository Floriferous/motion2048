import React from 'react';
import PropTypes from 'prop-types';
import BoxListTransition from './BoxListTransition';
import constants from '../../config/constants';

const getPosition = (i, max, boxSize) => {
  const space =
    (max - constants.BOXES_PER_ROW * boxSize) / (constants.BOXES_PER_ROW - 1);
  const spaceSize = i * space;
  const boxesSize = i * boxSize;
  return boxesSize + spaceSize;
};

const BoxList = ({
  boxes,
  settings: { gameWidth, gameHeight, boxSize },
  ...otherProps
}) => (
  <BoxListTransition
    boxes={boxes.map(box => ({
      key: '' + box.id,
      data: {
        ...box,
        top: getPosition(box.y, gameHeight, boxSize),
        left: getPosition(box.x, gameWidth, boxSize),
        gameWidth,
        gameHeight,
        boxSize,
      },
    }))}
    boxSize={boxSize}
    {...otherProps}
  />
);

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxList;
