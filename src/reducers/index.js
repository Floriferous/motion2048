import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import appState from './appState';
import gameState from './gameState';
import gameSettings from './gameSettings';
import highscore from './highscore';

const rootReducer = combineReducers({
  appState,
  gameState,
  gameSettings,
  highscore,
  firebase: firebaseStateReducer,
});

export default rootReducer;
