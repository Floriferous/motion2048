import { combineReducers } from 'redux';
import appState from './appState';
import gameState from './gameState';
import gameSettings from './gameSettings';
import highscore from './highscore';

const rootReducer = combineReducers({
  appState,
  gameState,
  gameSettings,
  highscore,
});

export default rootReducer;
