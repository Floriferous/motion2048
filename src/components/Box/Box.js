import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import colors, { boxColors } from '../../config/colors';
import niceNumber from '../../js/niceNumber';

const getStyles = value => ({
  box: {
    position: 'absolute',
    background: boxColors[value],
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: 4,
  },
});

const Box = ({
  style,
  x,
  y,
  top,
  left,
  value,
  gameWidth,
  gameHeight,
  boxSize,
}) => {
  return (
    <Motion
      defaultStyle={{ top: gameHeight / 2, left: gameWidth / 2, value: 0 }}
      style={{
        top: spring(top, presets.stiff),
        left: spring(left, presets.stiff),
        value: spring(value, presets.stiff),
      }}
    >
      {motionValues => (
        <div
          style={{
            ...getStyles(value).box,
            ...style,
            top: motionValues.top,
            left: motionValues.left,
          }}
        >
          <h2 style={{ margin: 0, fontSize: boxSize / 4 }}>
            {niceNumber(Math.round(motionValues.value))}
          </h2>
        </div>
      )}
    </Motion>
  );
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
