import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import colors, { boxColors } from '../../config/colors';

const getStyles = value => ({
  box: {
    position: 'absolute',
    background: boxColors[value],
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 10000 - value / 10000,
  },
});

const Box = ({ style, x, y, top, left, value, gameWidth, gameHeight }) => {
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
          <h2 style={{ margin: 0 }}>{Math.round(motionValues.value)}</h2>
        </div>
      )}
    </Motion>
  );
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
