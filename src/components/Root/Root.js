import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';
import Home from '../Home';

const Root = ({ rootState, onGameStart, onGameEnd }) => {
  if (rootState === 'game') {
    return <GameContainer onGameEnd={onGameEnd} />;
  } else if (rootState === 'home') {
    return <Home onGameStart={onGameStart} />;
  }
};

Root.propTypes = {
  rootState: PropTypes.string.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default Root;
