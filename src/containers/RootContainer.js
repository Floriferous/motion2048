import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import endGame from '../actions/endGame';
import startGame from '../actions/startGame';
import resetGame from '../actions/resetGame';
import goHome from '../actions/goHome';
import addHighscore from '../actions/addHighscore';
import setScore from '../actions/setScore';

const mapStateToProps = ({ appState, highscore }) => ({
  appState,
  highscore,
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGameEnd: score => {
    dispatch(addHighscore(score));
    dispatch(setScore(0));
    dispatch(endGame());
    dispatch(resetGame());
  },
  onGoHome: () => dispatch(goHome()),
});

const RootContainer = component =>
  compose(
    firebaseConnect([
      {
        path: '/highscores',
        storeAs: 'highscores',
      },
    ]),
    connect(mapStateToProps, mapDispatchToProps),
  )(component);

export default RootContainer;
