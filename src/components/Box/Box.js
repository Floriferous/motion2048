import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import colors from '../../config/colors';

const styles = {
  box: {
    position: 'absolute',
    background: colors.box,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

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
            ...styles.box,
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
