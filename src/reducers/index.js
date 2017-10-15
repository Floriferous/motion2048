import { combineReducers } from 'redux';
import appState from './appState';
import gameState from './gameState';
import gameSettings from './gameSettings';

const rootReducer = combineReducers({
  appState,
  gameState,
  gameSettings,
});

export default rootReducer;
