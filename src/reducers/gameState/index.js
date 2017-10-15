import { combineReducers } from 'redux';
import boxes from './boxes';
import score from './score';

const gameState = combineReducers({
  boxes,
  score,
});

export default gameState;
