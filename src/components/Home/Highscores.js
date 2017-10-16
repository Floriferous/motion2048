import React from 'react';
import PropTypes from 'prop-types';

const Highscores = ({ highscore }) => {
  if (highscore.length) {
    return (
      <div style={{ marginTop: 40 }} className="animated jackInTheBox">
        <h3>Highscores</h3>
        <ol style={{ display: 'flex', flexDirection: 'column' }}>
          {highscore
            .sort((a, b) => b.score - a.score)
            .map((score, i) => <li key={i}>{score.score}</li>)}
        </ol>
      </div>
    );
  }

  return null;
};

Highscores.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Highscores;
