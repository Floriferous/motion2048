import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';
import Home from '../Home';
import WindowSize from '../WindowSize';

const Root = ({ rootState, onGameStart, onGameEnd }) => {
  if (rootState === 'game') {
    return (
      <WindowSize>
        <GameContainer onGameEnd={onGameEnd} />
      </WindowSize>
    );
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
