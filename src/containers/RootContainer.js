import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import startGame from '../actions/startGame';
import goHome from '../actions/goHome';

const mapStateToProps = ({
  appState: { view },
  highscore,
  firebase: { data: { onlineHighscores } },
}) => ({
  view,
  highscore,
  // Map firebase object to array
  onlineHighscores:
    onlineHighscores &&
    Object.keys(onlineHighscores).map(scoreId => ({
      ...onlineHighscores[scoreId],
      id: scoreId,
    })),
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGoHome: () => dispatch(goHome()),
});

const RootContainer = component =>
  compose(
    firebaseConnect([
      {
        path: '/highscores',
        storeAs: 'onlineHighscores',
      },
    ]),
    connect(mapStateToProps, mapDispatchToProps),
  )(component);

export default RootContainer;
