import React from 'react';
import PropTypes from 'prop-types';
import RootContainer from '../../containers/RootContainer';
import Game from '../Game';
import Home from '../Home';
import WindowSize from '../WindowSize';

const Root = ({ rootState, onGameStart, onGameEnd }) => {
  if (rootState === 'game') {
    return (
      <WindowSize>
        <Game onGameEnd={onGameEnd} />
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

export default RootContainer(Root);
