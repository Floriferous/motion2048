import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../store';

const MyProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
