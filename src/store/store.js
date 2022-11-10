import * as firebase from 'firebase';

import { compose, createStore } from 'redux';

import { reactReduxFirebase } from 'react-redux-firebase';
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

let store;
const initialState = {};

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, reduxFirebaseConfig),
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(reactReduxFirebase(firebase, reduxFirebaseConfig)),
  );
}

// Create store with reducers and initial state

export default store;
