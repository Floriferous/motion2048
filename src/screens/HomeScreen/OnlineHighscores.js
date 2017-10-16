import React from 'react';

import niceNumber from '../../js/niceNumber';
import HighscoreItem from './HighscoreItem';

const OnlineHighscores = ({ onlineHighscores, bestScore }) => {
  const sortedHighscores = [
    ...onlineHighscores,
    { score: 1000000, name: 'Jesus', createdAt: new Date(), id: 'top' },
  ].sort((a, b) => b.score - a.score);
  const bestIndex =
    bestScore &&
    sortedHighscores.findIndex(score => score.score < bestScore.score);

  return (
    <div style={styles.div}>
      <h4>Global highscores</h4>
      <ol style={styles.list}>
        {sortedHighscores
          .slice(0, 20)
          .map(score => <HighscoreItem key={score.id} {...score} />)}
      </ol>
      {bestIndex > 20 && (
        <span style={{ textAlign: 'center', margin: '4px 0' }}>...</span>
      )}
      {bestIndex > 20 && (
        <span
          style={{
            display: 'flex',
            paddingLeft: 13,
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}
        >
          {bestIndex}.
          <h5 style={{ margin: 0 }}>
            &nbsp;
            {niceNumber(bestScore.score)} - <small>You</small>
          </h5>
        </span>
      )}
    </div>
  );
};

const styles = {
  div: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  list: {
    marginBottom: 0,
  },
};

OnlineHighscores.propTypes = {};

export default OnlineHighscores;
