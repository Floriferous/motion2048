import { connect } from 'react-redux';
import Root from '../components/Root';
import endGame from '../actions/endGame';
import startGame from '../actions/startGame';

const mapStateToProps = state => ({
  rootState: state.rootState,
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGameEnd: () => dispatch(endGame()),
});

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
