import React from 'react';
import PropTypes from 'prop-types';
import BoxListTransition from './BoxListTransition';
import constants from '../../config/constants';

const getPosition = (i, max) => {
  const space =
    (max - constants.BOXES_PER_ROW * constants.BOX_SIZE) /
    (constants.BOXES_PER_ROW - 1);
  const spaceSize = i * space;
  const boxSize = i * constants.BOX_SIZE;
  return boxSize + spaceSize;
};

const BoxList = ({ boxes, windowHeight, windowWidth, ...otherProps }) => (
  <BoxListTransition
    boxes={boxes.map(box => ({
      key: '' + box.id,
      data: {
        ...box,
        top: getPosition(box.y, windowHeight),
        left: getPosition(box.x, windowWidth),
      },
    }))}
    {...otherProps}
  />
);

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxList;
