import React from 'react';
import PropTypes from 'prop-types';

import RootContainer from '../containers/RootContainer';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import ScoreScreen from '../screens/ScoreScreen';

const Root = ({
  view,
  onGameStart,
  highscore,
  onlineHighscores,
  onGoHome,
  firebase: { push },
}) => {
  switch (view) {
    case 'game':
      return <GameScreen />;
    case 'home':
      return (
        <HomeScreen
          onGameStart={onGameStart}
          highscore={highscore}
          onlineHighscores={onlineHighscores}
        />
      );
    case 'score':
      return (
        <ScoreScreen
          onGameStart={onGameStart}
          onGoHome={onGoHome}
          push={push}
          highscore={highscore}
        />
      );
    default:
      throw new Error(`invalid view name: ${view}`);
  }
};

Root.propTypes = {
  view: PropTypes.string.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onGoHome: PropTypes.func.isRequired,
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
  onlineHighscores: PropTypes.arrayOf(PropTypes.object).isRequired,
  firebase: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RootContainer(Root);
