import { connect } from 'react-redux';
import Game from '../components/Game';
import addBox from '../actions/addBox';
import setDirection from '../actions/setDirection';

const mapStateToProps = state => ({
  boxes: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  onAddBox: id => dispatch(addBox(id)),
  onSetDirection: newDirection => dispatch(setDirection(newDirection)),
});

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
