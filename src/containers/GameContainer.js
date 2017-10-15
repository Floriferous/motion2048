import { connect } from 'react-redux';
import addBox from '../actions/addBox';
import mergeBoxes from '../actions/mergeBoxes';
import setDirection from '../actions/setDirection';
import setScore from '../actions/setScore';

const mapStateToProps = ({ gameState, gameSettings }) => ({
  boxes: gameState.boxes,
  score: gameState.score,
  settings: gameSettings,
});

const mapDispatchToProps = dispatch => ({
  onAddBox: () => dispatch(addBox()),
  onSetDirection: newDirection => {
    dispatch(mergeBoxes(newDirection));
    dispatch(setDirection(newDirection));
  },
  onSetScore: score => dispatch(setScore(score)),
});

const GameContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default GameContainer;
