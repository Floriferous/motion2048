import React from 'react';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Loading from './Loading';
import Empty from './Empty';

const QueryDisplayer = ({ queryItems, children, emptyText }) =>
  !isLoaded(queryItems) ? (
    <Loading />
  ) : isEmpty(queryItems) ? (
    <Empty text={emptyText} />
  ) : (
    children
  );

QueryDisplayer.propTypes = {
  queryItems: PropTypes.any,
  children: PropTypes.node.isRequired,
  emptyText: PropTypes.string,
};

export default QueryDisplayer;
