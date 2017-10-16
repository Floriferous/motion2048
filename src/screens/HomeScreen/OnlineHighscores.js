import React from 'react';
import moment from 'moment';

import niceNumber from '../../js/niceNumber';

const OnlineHighscores = ({ onlineHighscores }) => {
  return (
    <div>
      <h4>Global highscores</h4>
      <ol>
        {onlineHighscores
          .sort((a, b) => b.score - a.score)
          .slice(0, 20)
          .map(score => (
            <li key={score.id}>
              <h5 style={{ margin: 0 }}>
                {niceNumber(score.score)} -{' '}
                <small>
                  {score.name},{' '}
                  <span style={{ opacity: 0.6 }}>
                    {moment(score.createdAt).fromNow()}
                  </span>
                </small>
              </h5>
            </li>
          ))}
      </ol>
    </div>
  );
};

OnlineHighscores.propTypes = {};

export default OnlineHighscores;
