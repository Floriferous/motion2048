import React from 'react';
import PropTypes from 'prop-types';

import HighscoreItem from './HighscoreItem';

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const LocalHighscores = ({ highscores }) => (
  <div style={styles.list}>
    <h4>Your highscores</h4>
    <ol style={{ display: 'flex', flexDirection: 'column' }}>
      {highscores
        .slice(0, 20)
        .map(score => <HighscoreItem key={score.createdAt} {...score} />)}
    </ol>
  </div>
);

LocalHighscores.propTypes = {
  highscores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LocalHighscores;
