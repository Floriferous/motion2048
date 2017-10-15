import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = {
  h2: {
    position: 'absolute',
    top: 4,
    left: 8,
    margin: 0,
    color: colors.white,
  },
};

const Score = ({ score }) => (
  <h2 style={styles.h2}>
    <small>Score:</small> {score}
  </h2>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
