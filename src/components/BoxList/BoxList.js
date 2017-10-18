import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../config/constants';
import BoxListTransition from './BoxListTransition';

const getPosition = (i, max, boxSize) => {
  const space =
    (max - constants.BOXES_PER_ROW * boxSize) / (constants.BOXES_PER_ROW - 1);
  return i * (space + boxSize);
};

const BoxList = ({
  boxes,
  settings: {
    gameWidth, gameHeight, boxSize, stiffness, damping,
  },
  ...otherProps
}) => (
  <BoxListTransition
    boxes={boxes.map(box => ({
      key: `${box.id}`,
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
    stiffness={stiffness}
    damping={damping}
    {...otherProps}
  />
);

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BoxList;
