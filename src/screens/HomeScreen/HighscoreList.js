import './HomeScreen.css';

import LocalHighscores from './LocalHighscores';
import OnlineHighscores from './OnlineHighscores';
import PropTypes from 'prop-types';
import QueryDisplayer from '../../components/QueryDisplayer';
import React from 'react';
import Switch from 'material-ui/Switch';
import moment from 'moment';

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
  const [showAll, setShowAll] = React.useState(false);
  console.log('showAll:', showAll);
  const sortedHighscores = highscore.sort((a, b) => b.score - a.score);
  const lastHighscoreTime =
  onlineHighscores &&
  Math.max(...onlineHighscores.map(score => new Date(score.createdAt).getTime()));
  

  let displayedHighscores = onlineHighscores;

  if (!showAll && onlineHighscores) {
    displayedHighscores = onlineHighscores.filter(
      score => moment().diff(moment(score.createdAt), 'days') < 365,
    );
  } 


  return (
    <div style={styles.div} className="animated jackInTheBox highscore">
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>Highscores</h3>
      <p style={{ opacity: 0.6, margin: 0, marginBottom: 8 }}>
        {!!lastHighscoreTime &&
          `Last score submitted ${moment(lastHighscoreTime).fromNow()}`}
      </p>

      <div style={{display: "flex", alignItems: "center"}}>
        <span>Last year</span>
        <Switch checked={showAll} onChange={() => setShowAll(v => !v)}></Switch>
        <span>All of time</span>
      </div>
      <hr style={{ width: '100%' }} />
      <div style={styles.lists}>
        <QueryDisplayer queryItems={displayedHighscores}>
          <OnlineHighscores
            onlineHighscores={displayedHighscores}
            bestScore={sortedHighscores[0]}
            startAt={0}
          />
        </QueryDisplayer>
        <QueryDisplayer queryItems={displayedHighscores}>
          <OnlineHighscores
            onlineHighscores={displayedHighscores}
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
