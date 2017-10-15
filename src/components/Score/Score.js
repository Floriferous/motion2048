import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import colors from '../../config/colors';

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
    <Motion
      defaultStyle={{ score: 0 }}
      style={{ score: spring(score, presets.wobbly) }}
    >
      {value => (
        <span>
          <small>Score:</small> {Math.round(value.score)}
        </span>
      )}
    </Motion>
  </h2>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
