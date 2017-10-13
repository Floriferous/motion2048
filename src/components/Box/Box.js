import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import constants from '../../config/constants';

const styles = {
  box: {
    position: 'absolute',
    background: colors.box,
  },
};

const getPosition = (i, max) => {
  const space =
    (max - constants.BOXES_PER_ROW * constants.BOX_SIZE) /
    (constants.BOXES_PER_ROW - 1);
  const spaceSize = i * space;
  const boxSize = i * constants.BOX_SIZE;

  return boxSize + spaceSize;
};

const Box = ({ style, x, y, windowWidth, windowHeight }) => {
  return (
    <div
      style={{
        ...styles.box,
        ...style,
        top: getPosition(y, windowHeight),
        left: getPosition(x, windowWidth),
      }}
    />
  );
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
