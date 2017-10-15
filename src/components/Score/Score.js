import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import MotionValue from '../MotionValue';

const styles = {
  h2: {
    position: 'absolute',
    top: 16,
    left: 16,
    margin: 0,
    color: colors.white,
  },
};

const Score = ({ score }) => (
  <h2 style={styles.h2}>
    <small>Score:</small> <MotionValue value={score} />
  </h2>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
