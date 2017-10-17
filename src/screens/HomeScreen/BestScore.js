import React from 'react';
import PropTypes from 'prop-types';

import HighscoreItem from './HighscoreItem';

const styles = {
  div: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dots: {
    textAlign: 'center',
    margin: '4px 0',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
};

const BestScore = ({ position, score }) => (
  <div style={styles.div}>
    <span style={styles.dots}>...</span>

    <ol style={styles.list} start={`${position}`}>
      <HighscoreItem {...score} name="You" />
    </ol>
  </div>
);

BestScore.propTypes = {
  position: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default BestScore;
