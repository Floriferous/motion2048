import React from 'react';

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
              {score.score} - {score.name}
            </li>
          ))}
      </ol>
    </div>
  );
};

OnlineHighscores.propTypes = {};

export default OnlineHighscores;
