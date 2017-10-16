import React from 'react';
import PropTypes from 'prop-types';

import QueryDisplayer from '../../components/QueryDisplayer';
import niceNumber from '../../js/niceNumber';
import OnlineHighscores from './OnlineHighscores';
import './HomeScreen.css';

const Highscores = ({ highscore, onlineHighscores }) => (
  <div style={styles.div} className="animated jackInTheBox highscore">
    <h3 style={{ marginTop: 0, marginBottom: 8 }}>Highscores</h3>
    <hr style={{ width: '100%' }} />
    <div style={styles.lists}>
      {highscore &&
        highscore.length > 0 && (
          <div style={styles.list}>
            <h4>Your highscores</h4>
            <ol style={{ display: 'flex', flexDirection: 'column' }}>
              {highscore
                .sort((a, b) => b.score - a.score)
                .slice(0, 20)
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
