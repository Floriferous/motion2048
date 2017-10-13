import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from '../reducers';

let store = createStore(app);

const MyProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
