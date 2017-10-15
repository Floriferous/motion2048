import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';

const MotionValue = ({ value, style, preset }) => {
  return (
    <Motion
      defaultStyle={{ value: 0 }}
      style={{ value: spring(value, presets[preset]) }}
    >
      {value => <span style={style}>{Math.round(value.value)}</span>}
    </Motion>
  );
};

MotionValue.propTypes = {
  value: PropTypes.number.isRequired,
  preset: PropTypes.string,
};

MotionValue.defaultProps = {
  preset: 'wobbly',
};

export default MotionValue;
