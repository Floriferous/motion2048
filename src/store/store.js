import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import * as firebase from 'firebase';

import rootReducer from '../reducers';

const firebaseConfig = {
  apiKey: 'AIzaSyB4SexpuahJP6VN7pQuFAAe5dF-SSGyjQQ',
  authDomain: 'motion2048.firebaseapp.com',
  databaseURL: 'https://motion2048.firebaseio.com',
  projectId: 'motion2048',
  storageBucket: '',
  messagingSenderId: '698313910536',
};

firebase.initializeApp(firebaseConfig); // initialize firebase instance

const reduxFirebaseConfig = { userProfile: 'users' };

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase, reduxFirebaseConfig),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
