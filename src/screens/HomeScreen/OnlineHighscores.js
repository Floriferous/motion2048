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

const OnlineHighscores = ({
  onlineHighscores,
  bestScore,
  startAt,
  showBest,
}) => {
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
      <ol style={styles.list} start={`${startAt + 1}`}>
        {sortedHighscores
          .slice(startAt, startAt + 20)
          .map(score => <HighscoreItem key={score.id} {...score} />)}
      </ol>
      {showBest &&
        bestIndex > startAt + 20 && (
          <BestScore position={bestIndex} score={bestScore} />
        )}
    </div>
  );
};

OnlineHighscores.propTypes = {
  onlineHighscores: PropTypes.arrayOf(PropTypes.object).isRequired,
  bestScore: PropTypes.objectOf(PropTypes.any),
  startAt: PropTypes.number.isRequired,
  showBest: PropTypes.bool,
};

OnlineHighscores.defaultProps = {
  bestScore: undefined,
  showBest: undefined,
};

export default OnlineHighscores;
