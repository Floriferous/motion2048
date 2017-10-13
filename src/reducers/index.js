import { combineReducers } from 'redux';
import gameState from './gameState';
import rootState from './rootState';

const app = combineReducers({
  rootState,
  gameState,
});

export default app;
