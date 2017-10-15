import React from 'react';
import PropTypes from 'prop-types';

const Highscores = ({ highscore }) => {
  if (highscore.length) {
    return (
      <div style={{ marginTop: 40 }}>
        <h3>Highscores</h3>
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
          {highscore.sort((a, b) => a.score - b.score).map((score, i) => (
            <li key={i}>
              {i + 1}. {score.score}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

Highscores.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Highscores;
