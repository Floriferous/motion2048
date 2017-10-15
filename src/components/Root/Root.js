import React from 'react';
import PropTypes from 'prop-types';
import RootContainer from '../../containers/RootContainer';
import Game from '../Game';
import Home from '../Home';
import WindowSize from '../WindowSize';

const Root = ({ appState, onGameStart, onGameEnd, highscore }) => {
  if (appState === 'game') {
    return (
      <WindowSize>
        <Game onGameEnd={onGameEnd} />
      </WindowSize>
    );
  } else if (appState === 'home') {
    return <Home onGameStart={onGameStart} highscore={highscore} />;
  }
};

Root.propTypes = {
  appState: PropTypes.string.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default RootContainer(Root);
