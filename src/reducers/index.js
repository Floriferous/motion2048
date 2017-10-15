import { combineReducers } from 'redux';
import rootState from './rootState';
import gameState from './gameState';
import gameSettings from './gameSettings';

const app = combineReducers({
  rootState,
  gameState,
  gameSettings,
});

export default app;
