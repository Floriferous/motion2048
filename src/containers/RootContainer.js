import { connect } from 'react-redux';
import Root from '../components/Root';
import exitGame from '../actions/exitGame';
import startGame from '../actions/startGame';

const mapStateToProps = state => ({
  rootState: state.rootState,
});

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startGame()),
  onGameExit: () => dispatch(exitGame()),
});

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
