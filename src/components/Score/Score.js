import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  h2: {
    position: 'absolute',
    top: 8,
    left: 8,
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
