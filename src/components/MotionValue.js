import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';

import niceNumber from '../js/niceNumber';

const MotionValue = ({ value, style, preset }) => (
  <Motion
    defaultStyle={{ value: 0 }}
    style={{ value: spring(value, presets[preset]) }}
  >
    {motion => (
      <span style={style}>{niceNumber(Math.round(motion.value))}</span>
    )}
  </Motion>
);

MotionValue.propTypes = {
  value: PropTypes.number.isRequired,
  preset: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};

MotionValue.defaultProps = {
  preset: 'wobbly',
};

export default MotionValue;
