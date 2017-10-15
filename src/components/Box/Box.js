import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import colors from '../../config/colors';

const styles = {
  box: {
    position: 'absolute',
    background: colors.box,
  },
};

const Box = ({ style, x, y, top, left, windowWidth, windowHeight }) => {
  return (
    <Motion
      defaultStyle={{ top: 0, left: 0 }}
      style={{
        top: spring(top, presets.stiff),
        left: spring(left, presets.stiff),
      }}
    >
      {value => (
        <div
          style={{
            ...styles.box,
            ...style,
            top: value.top,
            left: value.left,
          }}
        />
      )}
    </Motion>
  );
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
