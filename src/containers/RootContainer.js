import { connect } from 'react-redux';
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
    dispatch(endGame());
    dispatch(resetGame());
    dispatch(setScore(0));
  },
  onGoHome: () => dispatch(goHome()),
});

const RootContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default RootContainer;
