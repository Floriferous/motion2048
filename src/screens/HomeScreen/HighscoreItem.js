import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import niceNumber from '../../js/niceNumber';

const HighscoreItem = ({ score, name, createdAt }) => {
  return (
    <li>
      <h5 style={{ margin: 0 }}>
        {niceNumber(score)} -{' '}
        <small>
          {name},{' '}
          <span style={{ opacity: 0.6 }}>{moment(createdAt).fromNow()}</span>
        </small>
      </h5>
    </li>
  );
};

HighscoreItem.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default HighscoreItem;
