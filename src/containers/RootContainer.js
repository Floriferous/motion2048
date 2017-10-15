import { connect } from 'react-redux';
import endGame from '../actions/endGame';
import startGame from '../actions/startGame';
import resetGame from '../actions/resetGame';
import addHighscore from '../actions/addHighscore';

const mapStateToProps = ({ appState, highscore }) => ({
  appState,
  highscore,
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGameEnd: score => {
    dispatch(endGame());
    dispatch(resetGame());
    dispatch(addHighscore(score));
  },
});

const RootContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default RootContainer;
