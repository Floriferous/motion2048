import { connect } from 'react-redux';
import endGame from '../actions/endGame';
import startGame from '../actions/startGame';
import resetGame from '../actions/resetGame';

const mapStateToProps = state => ({
  rootState: state.rootState,
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGameEnd: () => {
    dispatch(endGame());
    dispatch(resetGame());
  },
});

const RootContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default RootContainer;
