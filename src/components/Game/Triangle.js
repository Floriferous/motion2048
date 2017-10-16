import React from 'react';
import PropTypes from 'prop-types';

const getStyles = side => {
  let position;
  switch (side) {
    case 'UP':
      position = { bottom: '50%', right: '50%' };
      break;
    case 'RIGHT':
      position = { bottom: '50%', left: '50%' };
      break;
    case 'DOWN':
      position = { top: '50%', left: '50%' };
      break;
    case 'LEFT':
      position = { top: '50%', right: '50%' };
      break;
    default:
      throw new Error(`invalid side: ${side}`);
  }

  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    ...position,
  };
};

const Triangle = ({ side, onClickTriangle }) => {
  return (
    <div
      className={side}
      style={getStyles(side)}
      onClick={() => onClickTriangle(side)}
    />
  );
};

Triangle.propTypes = {
  side: PropTypes.string.isRequired,
  onClickTriangle: PropTypes.func.isRequired,
};

export default Triangle;
