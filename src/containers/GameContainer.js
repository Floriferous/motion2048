import { connect } from 'react-redux';
import Game from '../components/Game';
import addBox from '../actions/addBox';

const mapStateToProps = state => ({
  boxes: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  onAddBox: id => dispatch(addBox(id)),
});

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
