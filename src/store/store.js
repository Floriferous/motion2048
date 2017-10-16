import { createStore, compose } from 'redux';
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

const reduxFirebaseConfig = { userProfile: 'users' };

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore);

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
