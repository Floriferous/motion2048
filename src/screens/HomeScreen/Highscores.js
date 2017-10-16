import React from 'react';
import PropTypes from 'prop-types';

import QueryDisplayer from '../../components/QueryDisplayer';
import niceNumber from '../../js/niceNumber';
import OnlineHighscores from './OnlineHighscores';

const Highscores = ({ highscore, onlineHighscores }) => (
  <div style={styles.div} className="animated jackInTheBox">
    <h3>Highscores</h3>
    <div style={styles.lists}>
      {highscore &&
        highscore.length > 0 && (
          <div style={styles.list}>
            <h4>Your highscores</h4>
            <ol style={{ display: 'flex', flexDirection: 'column' }}>
              {highscore
                .sort((a, b) => b.score - a.score)
                .map((score, i) => <li key={i}>{niceNumber(score.score)}</li>)}
            </ol>
          </div>
        )}
      <QueryDisplayer queryItems={onlineHighscores}>
        <OnlineHighscores onlineHighscores={onlineHighscores} />
      </QueryDisplayer>
    </div>
  </div>
);

const styles = {
  div: {
    marginTop: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lists: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

Highscores.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Highscores;
