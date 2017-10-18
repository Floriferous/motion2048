import React from 'react';
import PropTypes from 'prop-types';

import QueryDisplayer from '../../components/QueryDisplayer';
import OnlineHighscores from './OnlineHighscores';
import LocalHighscores from './LocalHighscores';
import './HomeScreen.css';

const styles = {
  div: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lists: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
};

const HighscoreList = ({ highscore, onlineHighscores }) => {
  const sortedHighscores = highscore.sort((a, b) => b.score - a.score);
  return (
    <div style={styles.div} className="animated jackInTheBox highscore">
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>Highscores</h3>
      <hr style={{ width: '100%' }} />
      <div style={styles.lists}>
        <QueryDisplayer queryItems={onlineHighscores}>
          <OnlineHighscores
            onlineHighscores={onlineHighscores}
            bestScore={sortedHighscores[0]}
            startAt={0}
          />
        </QueryDisplayer>
        <QueryDisplayer queryItems={onlineHighscores}>
          <OnlineHighscores
            onlineHighscores={onlineHighscores}
            bestScore={sortedHighscores[0]}
            startAt={20}
            showBest
          />
        </QueryDisplayer>
      </div>
    </div>
  );
};

HighscoreList.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HighscoreList;
