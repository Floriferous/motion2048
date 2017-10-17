import { connect } from 'react-redux';

import addBox from '../actions/addBox';
import mergeBoxes from '../actions/mergeBoxes';
import setDirection from '../actions/setDirection';
import setScore from '../actions/setScore';
import addHighscore from '../actions/addHighscore';
import resetGame from '../actions/resetGame';
import endGame from '../actions/endGame';

const mapStateToProps = ({ gameState, gameSettings }) => ({
  boxes: gameState.boxes,
  score: gameState.score,
  settings: gameSettings,
});

const mapDispatchToProps = dispatch => ({
  onAddBox: () => dispatch(addBox()),
  onSetDirection: (newDirection) => {
    dispatch(mergeBoxes(newDirection));
    dispatch(setDirection(newDirection));
  },
  onSetScore: score => dispatch(setScore(score)),
  onGameEnd: (score) => {
    dispatch(addHighscore(score));
    dispatch(setScore(0));
    dispatch(endGame());
    dispatch(resetGame());
  },
});

const GameContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default GameContainer;
