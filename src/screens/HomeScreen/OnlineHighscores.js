import React from 'react';

import niceNumber from '../../js/niceNumber';

const OnlineHighscores = ({ onlineHighscores }) => {
  return (
    <div>
      <h4>Global highscores</h4>
      <ol>
        {onlineHighscores
          .sort((a, b) => b.score - a.score)
          .slice(0, 10)
          .map(score => (
            <li key={score.id}>
              <h5 style={{ margin: 0 }}>
                {niceNumber(score.score)} - <small>{score.name}</small>
              </h5>
            </li>
          ))}
      </ol>
    </div>
  );
};

OnlineHighscores.propTypes = {};

export default OnlineHighscores;
