import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const MyProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
