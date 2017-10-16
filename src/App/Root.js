import React from 'react';
import PropTypes from 'prop-types';
import RootContainer from '../containers/RootContainer';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import ScoreScreen from '../screens/ScoreScreen';

const Root = ({ appState, onGameStart, onGameEnd, highscore, onGoHome }) => {
  if (appState === 'game') {
    return <GameScreen onGameEnd={onGameEnd} />;
  } else if (appState === 'home') {
    return <HomeScreen onGameStart={onGameStart} highscore={highscore} />;
  } else if (appState === 'score') {
    return (
      <ScoreScreen
        highscore={highscore}
        onGameStart={onGameStart}
        onGoHome={onGoHome}
      />
    );
  }
};

Root.propTypes = {
  appState: PropTypes.string.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default RootContainer(Root);
