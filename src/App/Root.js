import React from 'react';
import PropTypes from 'prop-types';
import RootContainer from '../containers/RootContainer';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import ScoreScreen from '../screens/ScoreScreen';

const Root = ({
  appState: { view },
  onGameStart,
  onGameEnd,
  highscore,
  onGoHome,
  firebase: { push },
}) => {
  if (view === 'game') {
    return <GameScreen onGameEnd={onGameEnd} />;
  } else if (view === 'home') {
    return <HomeScreen onGameStart={onGameStart} highscore={highscore} />;
  } else if (view === 'score') {
    return (
      <ScoreScreen
        highscore={highscore}
        onGameStart={onGameStart}
        onGoHome={onGoHome}
        push={push}
      />
    );
  }
};

Root.propTypes = {
  appState: PropTypes.object.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default RootContainer(Root);
