import { connect } from 'react-redux';
import addBox from '../actions/addBox';
import mergeBoxes from '../actions/mergeBoxes';
import setDirection from '../actions/setDirection';

const mapStateToProps = ({ gameState, gameSettings }) => ({
  boxes: gameState,
  settings: gameSettings,
});

const mapDispatchToProps = dispatch => ({
  onAddBox: () => dispatch(addBox()),
  onSetDirection: newDirection => {
    dispatch(mergeBoxes(newDirection));
    dispatch(setDirection(newDirection));
    // dispatch(addBox());
  },
});

const GameContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default GameContainer;
