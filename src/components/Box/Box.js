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

const getPosition = xOrY => {
  if (xOrY === 0) {
    return 0;
  } else if (xOrY === constants.BOXES_PER_ROW - 1) {
    return `calc(100% - ${constants.BOX_SIZE}px)`;
  } else {
    return `calc(${xOrY *
      100 /
      constants.BOXES_PER_ROW}% - ${constants.BOX_SIZE / 2}px)`;
  }
};

const Box = ({ style, x, y, id }) => {
  return (
    <div
      style={{
        ...styles.box,
        ...style,
        top: getPosition(y),
        left: getPosition(x),
      }}
    />
  );
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
