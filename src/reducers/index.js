import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';

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
  form: formReducer,
});

export default rootReducer;
