import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import HighscoreItem from './HighscoreItem';
import BestScore from './BestScore';

const styles = {
  div: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  list: {
    marginBottom: 8,
  },
};

const OnlineHighscores = ({ onlineHighscores, bestScore }) => {
  const sortedHighscores = [
    ...onlineHighscores,
    {
      score: 1000000,
      name: 'Jesus',
      createdAt: moment().year(17),
      id: 'top',
    },
  ].sort((a, b) => b.score - a.score);
  const bestIndex =
    bestScore &&
    sortedHighscores.findIndex(score => score.score < bestScore.score);

  return (
    <div style={styles.div}>
      <h4 style={{ margin: 0, marginTop: 8 }}>Global highscores</h4>
      <ol style={styles.list}>
        {sortedHighscores
          .slice(0, 20)
          .map(score => <HighscoreItem key={score.id} {...score} />)}
      </ol>
      {bestIndex > 20 && <BestScore position={bestIndex} score={bestScore} />}
    </div>
  );
};

OnlineHighscores.propTypes = {
  onlineHighscores: PropTypes.arrayOf(PropTypes.object).isRequired,
  bestScore: PropTypes.objectOf(PropTypes.any),
};

OnlineHighscores.defaultProps = {
  bestScore: undefined,
};

export default OnlineHighscores;
